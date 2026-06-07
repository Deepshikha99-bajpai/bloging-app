"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SpeechContentContext = createContext(null);

export const htmlToPlainText = (html) =>
  (html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const SpeechContentProvider = ({ children }) => {
  const [customText, setCustomTextState] = useState("");

  const setCustomText = useCallback((text) => {
    setCustomTextState(typeof text === "string" ? text : "");
  }, []);

  const clearCustomText = useCallback(() => {
    setCustomTextState("");
  }, []);

  const value = useMemo(
    () => ({ customText, setCustomText, clearCustomText }),
    [customText, setCustomText, clearCustomText]
  );

  return (
    <SpeechContentContext.Provider value={value}>{children}</SpeechContentContext.Provider>
  );
};

export const useSpeechContent = () => {
  const context = useContext(SpeechContentContext);
  if (!context) {
    throw new Error("useSpeechContent must be used within SpeechContentProvider");
  }
  return context;
};
