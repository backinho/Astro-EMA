interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly PUBLIC_IMAGEKIT_URL: string;
  readonly PUBLIC_IMAGEKIT_KEY: string;
  readonly PRIVATE_IMAGEKIT_KEY: string;
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_KEY: string;
}