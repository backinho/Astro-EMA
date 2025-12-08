import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getInventario, getCategories, addCategory, editCategory, deleteCategory } from "../../models/almacen/inventario";

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
    }),
    editCategory: defineAction({
        input: z.object({
            name: z.string().min(3),
            categoryId: z.number(),
        }),
        async handler({ name, categoryId }) {
            const { data, error } = await editCategory(name, categoryId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al editar la categoría: ' + error,
                };
            }

            return {
                status: true,
                message: 'Categoría editada exitosamente',
            };
        }
    }),
    deleteCategory: defineAction({
        input: z.object({
            categoryId: z.number(),
        }),
        async handler({ categoryId }) {
            const { data, error } = await deleteCategory(categoryId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar la categoría: ' + error,
                };
            }

            return {
                status: true,
                message: 'Categoría eliminada exitosamente',
            };
        }
    })
});