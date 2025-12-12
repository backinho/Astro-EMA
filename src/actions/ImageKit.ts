import ImageKit from "imagekit";
import { defineAction } from "astro:actions";

const imageKitUrl = import.meta.env.PUBLIC_IMAGEKIT_URL;
const imageKitKey = import.meta.env.PUBLIC_IMAGEKIT_KEY;
const imageKitPrivateKey = import.meta.env.PRIVATE_IMAGEKIT_KEY;

const ikServer = new ImageKit({
    publicKey: imageKitKey,
    privateKey: imageKitPrivateKey,
    urlEndpoint: imageKitUrl
})

export const imageKitServer = {
    getUploadAuthenticationParams: defineAction({
        async handler(){
            const authParams = ikServer.getAuthenticationParameters();
            return authParams;
        }
    })
}