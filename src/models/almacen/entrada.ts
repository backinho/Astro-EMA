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

export async function addSupplier(nombre: string, tipo_documento: string, nro_documento: number, estado: boolean) {
    const { data, error } = await supabase
        .from('personas')
        .insert({
            nombre: nombre,
            tipo_documento: tipo_documento,
            nro_documento: nro_documento,
            estado: estado,
        })
        .select('idpersona')

    if (error) {
        console.error('Error al agregar el proveedor:', error);
        return { data: null, error };
    }

    return { data: data[0].idpersona, error: null };
}

export async function addSupplierContact(idpersona: number, phone: number, email: string) {
    const { data, error } = await supabase
        .from('contacto')
        .insert({
            idpersona: idpersona,
            phone: phone,
            email: email,
        });

    if (error) {
        console.error('Error al agregar el contacto del proveedor:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function addSupplierDirection(idpersona: number, address: string, city: string, zip_code: number) {
    const { data, error } = await supabase
        .from('direccion')
        .insert({
            idpersona: idpersona,
            address: address,
            city: city,
            zip_code: zip_code,
        });

    if (error) {
        console.error('Error al agregar la dirección del proveedor:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}

export async function asingSupplierType(idpersona: number, type: string) {
    const { data, error } = await supabase
        .from('tipo_persona')
        .insert({
            idpersona: idpersona,
            type: type,
        });

    if (error) {
        console.error('Error al asignar el tipo de proveedor:', error);
        return { data: null, error };
    }

    return { data: data, error: null };
}