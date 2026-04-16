import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "zh" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "wuji_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

const normalizeLanguage = (value: unknown): Language | null => {
  if (value === "zh" || value === "en") return value;
  return null;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
      return saved ?? "zh";
    } catch {
      return "zh";
    }
  });

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({ language, setLanguage, toggleLanguage }), [language, setLanguage, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

