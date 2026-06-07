"use client";

import { useEffect } from "react";
import { useSpeechContent } from "@/context/SpeechContentContext";

export const useSyncSpeechContent = (text) => {
  const { setCustomText, clearCustomText } = useSpeechContent();

  useEffect(() => {
    const normalized = (text || "").replace(/\s+/g, " ").trim();
    if (normalized) {
      setCustomText(normalized);
    } else {
      clearCustomText();
    }

    return () => clearCustomText();
  }, [text, setCustomText, clearCustomText]);
};
