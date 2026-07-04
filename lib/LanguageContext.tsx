"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations["fr"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("kbfc-lang") as Language | null;
    if (saved && (saved === "fr" || saved === "en" || saved === "es")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("kbfc-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
