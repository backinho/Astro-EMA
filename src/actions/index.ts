import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import { auth } from './Auth';
import { inventario } from './almacen/Inventario';

export const server = {
    auth,
    inventario
}