/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL;
  readonly VITE_OPENAI_API_KEY;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
