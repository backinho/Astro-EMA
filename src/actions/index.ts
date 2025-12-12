import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import { auth } from './Auth';
import { inventario } from './almacen/Inventario';
import { imageKitServer } from './ImageKit';

export const server = {
    auth,
    inventario,
    imageKitServer
}