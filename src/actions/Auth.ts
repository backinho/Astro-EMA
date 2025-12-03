import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { signInWithEmail } from "../models/auth";

export const auth = {
    loginAction: defineAction({
        input: z.object({
            email: z.string().email().min(3),
        }),
        async handler({ email }){
            const { data, error } = await signInWithEmail(email);

            if ( error || !data ) { // Si hay un error o no hay datos, falla.
                return {
                    status: false,
                    message: 'Error al iniciar sesión: ' + (error || 'Usuario no encontrado'),
                }
            }

            // Si data existe, significa que la consulta fue exitosa.
            return {
                status: true,
                message: 'Datos cargados: ' + JSON.stringify(data),
            }       
        }
    })
}