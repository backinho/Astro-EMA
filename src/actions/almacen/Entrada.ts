import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getEntries, addEntry, addEntryDetail, getSuppliers, addSupplier, editSupplier, deleteSupplier, asingSupplierType, addSupplierContact, deleteSupplierContact, addSupplierDirection, deleteSupplierDirection } from "../../models/almacen/entrada";

export const entrada = ({
    getEntries: defineAction({
        handler: async () => {
            const entries = await getEntries();
            return entries;
        }
    }),
    addEntry: defineAction({
        input: z.object({
            idproveedor: z.number(),
            idusuario: z.number(),
            receipt_type: z.string(),
            receipt_number: z.number(),
            image: z.string(),
            entry_date: z.string(),
            purchase_total: z.number(),
        }),
        async handler({ idproveedor, idusuario, receipt_type, receipt_number, image, entry_date, purchase_total }) {
            const { data, error } = await addEntry(idproveedor, idusuario, receipt_type, receipt_number, image, entry_date, purchase_total);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar la entrada: ' + error,
                };
            }

            return {
                status: true,
                message: 'Entrada agregada exitosamente',
                identrada: data
            };
        }
    }),
    addEntryDetail: defineAction({
        input: z.object({
            identrada: z.number(),
            idarticulo: z.number(),
            cantidad: z.number(),
            purchase_price: z.number(),
            sale_price: z.number(),
        }),
        async handler({ identrada, idarticulo, cantidad, purchase_price, sale_price }) {
            const { data, error } = await addEntryDetail(identrada, idarticulo, cantidad, purchase_price, sale_price);

            if (error) {
                return {
                    status: false,
                    message: 'Error al agregar el detalle de la entrada: ' + error,
                };
            }

            return {
                status: true,
                message: 'Detalle de la entrada agregado exitosamente',
                identrada_detalle: data
            };
        }
    }),
    getSuppliers: defineAction({
        handler: async () => {
            const suppliers = await getSuppliers();
            return suppliers;
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
    editSupplier: defineAction({
        input: z.object({
            idpersona: z.number(),
            nameProveedor: z.string(),
            rifProveedor: z.number(),
            estadoProveedor: z.boolean(),
        }),
        async handler({ idpersona, nameProveedor, rifProveedor, estadoProveedor }) {
            const { data, error } = await editSupplier(idpersona, nameProveedor, 'RIF', rifProveedor, estadoProveedor);

            if (error) {
                return {
                    status: false,
                    message: 'Error al editar el proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Proveedor editado exitosamente',
            };
        }
    }),
    deleteSupplier: defineAction({
        input: z.object({
            idpersona: z.number(),
        }),
        async handler({ idpersona }) {
            const { data, error } = await deleteSupplier(idpersona);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar el proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Proveedor eliminado exitosamente',
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
    deleteSupplierContact: defineAction({
        input: z.object({
            idpersona: z.number(),
        }),
        async handler({ idpersona }) {
            const { data, error } = await deleteSupplierContact(idpersona);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar el contacto del proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Contacto del proveedor eliminado exitosamente',
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
    }),
    deleteSupplierDirection: defineAction({
        input: z.object({
            idpersona: z.number(),
        }),
        async handler({ idpersona }) {
            const { data, error } = await deleteSupplierDirection(idpersona);

            if (error) {
                return {
                    status: false,
                    message: 'Error al eliminar la direccion del proveedor: ' + error,
                };
            }

            return {
                status: true,
                message: 'Direccion del proveedor eliminada exitosamente',
            };
        }
    })
});