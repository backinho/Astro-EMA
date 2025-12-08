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
