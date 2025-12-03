import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getInventario, getCategories, addCategory } from "../../models/almacen/inventario";

export const inventario = ({
    getInventario: defineAction({
        handler: async () => {
            const inventario = await getInventario();
            return inventario;
        }
    }),
    getCategories: defineAction({
        handler: async () => {
            const categorias = await getCategories();
            return categorias;
        }
    }),
    addCategory: defineAction({
        input: z.object({
            name: z.string().min(3),
        }),
        async handler({ name }) {
            const { data, error } = await addCategory(name);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar la categoría: ' + error,
                };
            }

            return {
                status: true,
                message: 'Categoría agregada exitosamente',
            };
        }
    })
});