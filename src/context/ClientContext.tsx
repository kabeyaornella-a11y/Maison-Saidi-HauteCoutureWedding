import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loadClient, type ClientBundle } from '../config/loadClient';

const ClientContext = createContext<ClientBundle | null>(null);

function toKebabCase(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function applyTheme(theme: ClientBundle['themeConfig']) {
  const root = document.documentElement.style;

  for (const [key, value] of Object.entries(theme.colors)) {
    root.setProperty(`--${toKebabCase(key)}`, value);
  }
  root.setProperty('--font-display', `"${theme.fonts.display}", Georgia, serif`);
  root.setProperty('--font-script', `"${theme.fonts.script}", "Snell Roundhand", cursive`);
  root.setProperty('--font-body', `${theme.fonts.body}, system-ui, sans-serif`);
  for (const [key, value] of Object.entries(theme.layout)) {
    root.setProperty(`--${toKebabCase(key)}`, value);
  }
}

function loadGoogleFonts(url?: string) {
  if (!url) return;
  if (document.querySelector(`link[href="${url}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

async function loadScriptFont(family: string, fileUrl?: string) {
  if (!fileUrl || typeof FontFace === 'undefined') return;
  try {
    const font = new FontFace(family, `url(${fileUrl})`);
    const loaded = await font.load();
    document.fonts.add(loaded);
  } catch {
    // Si la police custom échoue à charger, le fallback CSS (cursive) prend le relais.
  }
}

function applyMeta(config: ClientBundle['invitationConfig']) {
  document.title = config.brand.pageTitle;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', config.brand.metaDescription);
}

export function ClientProvider({ children }: { children: ReactNode }) {
  const [bundle, setBundle] = useState<ClientBundle | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadClient()
      .then((loaded) => {
        if (cancelled) return;
        applyTheme(loaded.themeConfig);
        applyMeta(loaded.invitationConfig);
        loadGoogleFonts(loaded.themeConfig.fonts.googleFontsUrl);
        void loadScriptFont(loaded.themeConfig.fonts.script, loaded.themeConfig.fonts.scriptFontFile);
        setBundle(loaded);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        {error}
      </div>
    );
  }

  if (!bundle) return null;

  return <ClientContext.Provider value={bundle}>{children}</ClientContext.Provider>;
}

export function useClient(): ClientBundle {
  const ctx = useContext(ClientContext);
  if (!ctx) {
    throw new Error('useClient() doit être appelé à l’intérieur de <ClientProvider>.');
  }
  return ctx;
}
