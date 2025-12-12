import { supabase } from "../../supabase";

export async function getInventario() {
    const { data: inventario, error } = await supabase
        .from('articulo')
        .select('*, articulo_imagen(*), articulo_categoria(*, categoria(*))');

    if (error) {
        console.error('Error al obtener el inventario:', error);
        return { data: null, error };
    }

    return { data: inventario, error: null };
}

export async function addProduct(code: string, name: string, description: string, status: boolean) {
    const { data, error } = await supabase
        .from('articulo')
        .insert({ code: code, name: name, description: description, status: status })
        .select('idarticulo')

    if (error) {
        console.error('Error al agregar el producto:', error);
        return { data: null, error };
    }

    return { data: data[0].idarticulo, error: null };
}

export async function updateProduct(productId: number, code: string, name: string, description: string, status: boolean) {
    const { data, error } = await supabase
        .from('articulo')
        .update({ code: code, name: name, description: description, status: status })
        .eq('idarticulo', productId)
        .select('idarticulo');

    if (error) {
        console.error('Error al actualizar el producto:', error);
        return { data: null, error };
    }

    return { data: data[0].idarticulo, error: null };
}

export async function deleteProduct(productId: number) {
    const { data, error } = await supabase
        .from('articulo')
        .delete()
        .eq('idarticulo', productId);

    if (error) {
        console.error('Error al eliminar el producto:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function addImageToProduct(productId: number, imageUrl: string, order: number) {
    const { data, error } = await supabase
        .from('articulo_imagen')
        .insert({ idarticulo: productId, image: imageUrl, order: order });

    if (error) {
        console.error('Error al agregar la imagen al producto:', error);
        return { data: null, error };
    }
    
    return { data: data, error: null };
}

export async function deleteImageFromProduct(productId: number) {
    const { data, error } = await supabase
        .from('articulo_imagen')
        .delete()
        .eq('idarticulo', productId);

    if (error) {
        console.error('Error al eliminar la imagen del producto:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function addCategoryToProduct(productId: number, categoryId: number) {
    const { data, error } = await supabase
        .from('articulo_categoria')
        .insert({ idarticulo: productId, idcategoria: categoryId });

    if (error) {
        console.error('Error al agregar la categoría al producto:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function deleteCategoryFromProduct(productId: number, categoryId: number) {
    const { data, error } = await supabase
        .from('articulo_categoria')
        .delete()
        .eq('idarticulo', productId)
        .eq('idcategoria', categoryId);

    if (error) {
        console.error('Error al eliminar la categoría del producto:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function getCategories() {
    const { data: categorias, error } = await supabase
        .from('categoria')
        .select('*');

    if (error) {
        console.error('Error al obtener las categorías:', error);
        return { data: null, error };
    }

    return { data: categorias, error: null };
}

export async function addCategory(name: string) {
    const { data, error } = await supabase
        .from('categoria')
        .insert({ name: name });

    if (error) {
        console.error('Error al agregar la categoría:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function editCategory(name: string, categoryId: number) {
    const { data, error } = await supabase
        .from('categoria')
        .update({ name: name })
        .eq('idcategoria', categoryId);

    if (error) {
        console.error('Error al editar la categoría:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function deleteCategory(categoryId: number) {
    const { data, error } = await supabase
        .from('categoria')
        .delete()
        .eq('idcategoria', categoryId);

    if (error) {
        console.error('Error al eliminar la categoría:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}
