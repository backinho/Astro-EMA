import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getEntries } from "../../models/almacen/entrada";

export const entrada = ({
    getEntries: defineAction({
        handler: async () => {
            const entries = await getEntries();
            return entries;
        }
    }),
});