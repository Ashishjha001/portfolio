/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataDecisionEvents?: Array<{
    name: string;
    detail: Record<string, unknown>;
    timestamp: string;
  }>;
  ddTrack?: (name: string, detail?: Record<string, unknown>) => void;
}
