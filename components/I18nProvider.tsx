'use client';

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import i18next from 'i18next';
import '../i18n';

const LangContext = createContext({ lang: 'en', setLang: (l: string) => {} });
export const useLang = () => useContext(LangContext);

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('i18nextLng') || 'en';
    i18next.changeLanguage(saved);
    setLangState(saved);
    setReady(true);
  }, []);

  function setLang(l: string) {
    i18next.changeLanguage(l);
    setLangState(l);
    localStorage.setItem('i18nextLng', l);
    document.documentElement.lang = l;
  }

  if (!ready) return null;

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
