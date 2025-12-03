import { supabase } from "../supabase";

export async function signInWithEmail(email: string) {

    console.log("Intentando iniciar sesión para el email:", email);
    // --- 1. Consulta la Base de Datos con JOINs ---
    const { data: personData, error: fetchError } = await supabase
        .from('personas')
        .select(`*, contacto(*), credenciales(*)`)
        .eq('contacto.email', email)
        .limit(1);

    if (fetchError) {
        console.error("Error al buscar la persona:", fetchError);
        return { data: null, error: "Error interno del servidor." };
    }

    if (!personData) {
        // Usuario no encontrado o no tiene las 3 filas relacionadas
        return { data: null, error: "Usuario con ese email no encontrado." };
    }

    // --- 2. Éxito: Devolver los Datos ---
    const user = personData[0];

    // Devolver el objeto de datos del usuario
    return { data: user, error: null };
}