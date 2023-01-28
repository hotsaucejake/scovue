/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JOTSAUCE_API_URL: string;
  readonly VITE_INSTRUMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
