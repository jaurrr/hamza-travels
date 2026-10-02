import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'hi';

const STORAGE_KEY = 'ht-lang';

/**
 * Lightweight custom i18n — no external dependencies.
 *
 * - Dictionaries live in /i18n/en.json and /i18n/hi.json (served from public/).
 * - `lang` is a signal: changing it re-renders every `translate` pipe
 *   (the pipe is impure, so it picks the new language up automatically).
 * - Missing Hindi keys fall back to English, then to the caller fallback,
 *   then to the key itself — the UI never shows a blank string.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {

  /** Currently active language. */
  readonly lang = signal<Lang>('en');

  /** True once both dictionaries have loaded. */
  readonly ready = signal(false);

  private dicts: Record<Lang, Record<string, any>> = {
    en: {},
    hi: {}
  };

  constructor() {
    let initial: Lang = 'en';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') {
        initial = saved;
      }
    } catch {
      /* storage unavailable — stay on English */
    }

    this.lang.set(initial);
    this.applyHtmlLang(initial);
    this.loadDictionaries();
  }

  private loadDictionaries(): void {
    const load = (l: Lang) =>
      // Resolve against <base href> so deep routes (e.g. /service/x)
      // still load /i18n/en.json instead of /service/i18n/en.json.
      fetch(new URL(`i18n/${l}.json`, document.baseURI).toString())
        .then(res => {
          if (!res.ok) {
            throw new Error(`i18n ${l} failed: ${res.status}`);
          }
          return res.json();
        })
        .catch(() => ({}));

    Promise.all([load('en'), load('hi')]).then(([en, hi]) => {
      this.dicts = { en, hi };
      this.ready.set(true);
    });
  }
  /** Switch language and persist the choice. */
  setLang(lang: Lang): void {
    if (this.lang() === lang) {
      return;
    }
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    this.applyHtmlLang(lang);
  }

  toggle(): void {
    this.setLang(this.lang() === 'en' ? 'hi' : 'en');
  }

  private applyHtmlLang(lang: Lang): void {
    document.documentElement.lang = lang;
  }

  /** Translate a flat string key. */
  translate(key: string, fallback = ''): string {
    const l = this.lang();
    const hit = this.dicts[l]?.[key];
    if (typeof hit === 'string') {
      return hit;
    }
    const enHit = this.dicts.en?.[key];
    if (typeof enHit === 'string') {
      return enHit;
    }
    // While the dictionaries are still loading, never flash the raw
    // key (e.g. "nav.home") — render the fallback (or nothing) instead.
    if (!this.ready()) {
      return fallback;
    }
    return fallback || key;
  }

  /** Translate a key holding a string array (e.g. requirement lists). */
  translateArray(key: string, fallback: string[] = []): string[] {
    const l = this.lang();
    const hit = this.dicts[l]?.[key];
    if (Array.isArray(hit)) {
      return hit as string[];
    }
    const enHit = this.dicts.en?.[key];
    if (Array.isArray(enHit)) {
      return enHit as string[];
    }
    return fallback;
  }

  // ---- Service catalogue helpers (keys derived from service id) ----

  serviceName(id: string, fallback: string): string {
    return this.translate(`svc.${id}.name`, fallback);
  }

  serviceDescription(id: string, fallback: string): string {
    return this.translate(`svc.${id}.desc`, fallback);
  }

  serviceCharge(id: string, fallback: string): string {
    return this.translate(`svc.${id}.charge`, fallback);
  }

  serviceRequirements(id: string, fallback: string[]): string[] {
    return this.translateArray(`svc.${id}.reqs`, fallback);
  }

  serviceCategory(category: string): string {
    return this.translate(`cat.${category}`, category);
  }
}
