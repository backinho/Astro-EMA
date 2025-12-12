import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getInventario, addProduct, updateProduct, deleteProduct, addImageToProduct, deleteImageFromProduct, addCategoryToProduct, deleteCategoryFromProduct, getCategories, addCategory, editCategory, deleteCategory } from "../../models/almacen/inventario";

export const inventario = ({
    getInventario: defineAction({
        handler: async () => {
            const inventario = await getInventario();
            return inventario;
        }
    }),
    addProduct: defineAction({
        input: z.object({
            code: z.string().min(3),
            name: z.string().min(3),
            description: z.string().min(10),
            status: z.boolean(),
        }),
        async handler({ code, name, description, status }) {
            const { data, error } = await addProduct(code, name, description, status);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar el producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Producto agregado exitosamente',
                productId: data,
            };
        }
    }),
    updateProduct: defineAction({
        input: z.object({
            productId: z.number(),
            code: z.string().min(3),
            name: z.string().min(3),
            description: z.string().min(10),
            status: z.boolean(),
        }),
        async handler({ productId, code, name, description, status }) {
            const { data, error } = await updateProduct(productId, code, name, description, status);

            if (error) {
                return {
                    status: false,
                    message: 'Error al actualizar el producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Producto actualizado exitosamente',
                productId: data,
            };
        }
    }),
    deleteProduct: defineAction({
        input: z.object({
            productId: z.number(),
        }),
        async handler({ productId }) {
            const { data, error } = await deleteProduct(productId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar el producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Producto eliminado exitosamente',
            };
        }
    }),
    addImageToProduct: defineAction({
        input: z.object({
            productId: z.number(),
            imageUrl: z.string().url(),
            order: z.number(),
        }),
        async handler({ productId, imageUrl, order }) {
            const { data, error } = await addImageToProduct(productId, imageUrl, order);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar la imagen al producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Imagen agregada al producto exitosamente',
            };
        }
    }),
    deleteImageFromProduct: defineAction({
        input: z.object({
            productId: z.number(),
        }),
        async handler({ productId }) {
            const { data, error } = await deleteImageFromProduct(productId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar la imagen del producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Imagen eliminada del producto exitosamente',
            };
        }
    }),
    addCategoryToProduct: defineAction({
        input: z.object({
            productId: z.number(),
            categoryId: z.number(),
        }),
        async handler({ productId, categoryId }) {
            const { data, error } = await addCategoryToProduct(productId, categoryId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar la categoría al producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Categoría agregada al producto exitosamente',
            };
        }
    }),
    deleteCategoryFromProduct: defineAction({
        input: z.object({
            productId: z.number(),
            categoryId: z.number(),
        }),
        async handler({ productId, categoryId }) {
            const { data, error } = await deleteCategoryFromProduct(productId, categoryId);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar la categoría del producto: ' + error,
                };
            }

            return {
                status: true,
                message: 'Categoría eliminada del producto exitosamente',
            };
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