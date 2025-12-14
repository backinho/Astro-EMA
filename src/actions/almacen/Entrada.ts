import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getEntries, addSupplier, asingSupplierType, addSupplierContact, addSupplierDirection } from "../../models/almacen/entrada";

export const entrada = ({
    getEntries: defineAction({
        handler: async () => {
            const entries = await getEntries();
            return entries;
        }
    }),
    addSupplier: defineAction({
        input: z.object({
            nameProveedor: z.string(),
            rifProveedor: z.number(),
            estadoProveedor: z.boolean(),
        }),
        async handler({ nameProveedor, rifProveedor, estadoProveedor }) {
            const { data, error } = await addSupplier(nameProveedor, 'RIF', rifProveedor, estadoProveedor);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar el proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Proveedor agregado exitosamente',
                idpersona: data
            };
        }
    }),
    asingSupplierType: defineAction({
        input: z.object({
            idpersona: z.number(),
        }),
        async handler({ idpersona }) {
            const { data, error } = await asingSupplierType(idpersona, 'proveedor');

            if (error) {
                return {
                    status: false,
                    message: 'Error al asignar el tipo de proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Tipo de proveedor asignado exitosamente',
            };
        }
    }),
    addSupplierContact: defineAction({
        input: z.object({
            idpersona: z.number(),
            telefonoProveedor: z.number(),
            correoProveedor: z.string(),
        }),
        async handler({ idpersona, telefonoProveedor, correoProveedor }) {
            const { data, error } = await addSupplierContact(idpersona, telefonoProveedor, correoProveedor);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar el contacto del proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Contacto del proveedor agregado exitosamente',
            };
        }
    }),
    addSupplierDirection: defineAction({
        input: z.object({
            idpersona: z.number(),
            direccionProveedor: z.string(),
            ciudadProveedor: z.string(),
            codigoPostalProveedor: z.number(),
        }),
        async handler({ idpersona, direccionProveedor, ciudadProveedor, codigoPostalProveedor }) {
            const { data, error } = await addSupplierDirection(idpersona, direccionProveedor, ciudadProveedor, codigoPostalProveedor);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar la direccion del proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Direccion del proveedor agregada exitosamente',
            };
        }
    })
});