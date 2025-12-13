import { supabase } from "../../supabase";

export async function getEntries() {
    const { data: entries, error } = await supabase
        .from('entrada')
        .select('*, articulo_entrada(*, articulo(*))');

    if (error) {
        console.error('Error al obtener las entradas:', error);
        return { data: null, error };
    }

    return { data: entries, error: null };
}
