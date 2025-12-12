import { buildSrc, upload } from '@imagekit/javascript'

const imageKitUrl = import.meta.env.PUBLIC_IMAGEKIT_URL;
const imageKitKey = import.meta.env.PUBLIC_IMAGEKIT_KEY;

export const imageKit = {
    createUrl: (src: string, options = {}) => buildSrc({
        urlEndpoint: imageKitUrl,
        src: src
    }),
    uploadFile: (file: File, fileName: string, authParams: { signature: string; expire: number; token: string }, options = {}) => upload({
        file: file,
        fileName: fileName,
        publicKey: imageKitKey,
        signature: authParams.signature,
        expire: authParams.expire,
        token: authParams.token,
        ...options
    })
}