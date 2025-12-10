import * as ImageKit from '@imagekit/javascript'

const imageKitUrl = import.meta.env.PUBLIC_IMAGEKIT_URL;
const imageKitKey = import.meta.env.PUBLIC_IMAGEKIT_KEY;

export const imageKit = new (ImageKit as any).default({
    public: imageKitKey,
    urlEndpoint: imageKitUrl
})