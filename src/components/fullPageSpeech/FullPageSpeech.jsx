import React, { useEffect, useRef, useState } from "react";
import { useSpeechContent } from "@/context/SpeechContentContext";
import styles from "./fullpageSpeech.module.css";

const CHUNK_SIZE = 200;

const collectFormText = (root) => {
  if (!root) return "";

  const parts = [];

  root.querySelectorAll("input:not([type='hidden']):not([type='file'])").forEach((input) => {
    const value = input.value?.trim();
    if (value) parts.push(value);
  });

  root.querySelectorAll("textarea").forEach((textarea) => {
    const value = textarea.value?.trim();
    if (value) parts.push(value);
  });

  root.querySelectorAll(".ql-editor").forEach((editor) => {
    const value = editor.innerText?.trim();
    if (value && value !== "\n") parts.push(value);
  });

  return parts.join(". ");
};

const getReadablePageText = (customText) => {
  if (customText?.trim()) {
    return customText.replace(/\s+/g, " ").trim();
  }

  const main = document.getElementById("main-content");
  const formText = collectFormText(main);

  if (formText) {
    return formText.replace(/\s+/g, " ").trim();
  }

  const source = main?.innerText || document.body.innerText;
  return source.replace(/\s+/g, " ").trim();
};

const splitIntoChunks = (text) => {
  if (!text) return [];
  const chunks = [];
  for (let i = 0; i < text.length; i += CHUNK_SIZE) {
    chunks.push(text.slice(i, i + CHUNK_SIZE));
  }
  return chunks;
};

const FullPageSpeech = () => {
  const { customText } = useSpeechContent();
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [diagnosticMessage, setDiagnosticMessage] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length) {
        setVoices(availableVoices);
        setSelectedVoice((current) => current || availableVoices[0].name);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speakChunk = (voice) => {
    const chunks = chunksRef.current;
    const index = chunkIndexRef.current;

    if (index >= chunks.length) {
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.voice = voice;
    utterance.lang = voice.lang;

    utterance.onend = () => {
      chunkIndexRef.current += 1;
      speakChunk(voice);
    };

    utterance.onerror = () => {
      setSpeaking(false);
      setDiagnosticMessage("❌ Speech playback stopped unexpectedly.");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak = () => {
    const voice = voices.find((v) => v.name === selectedVoice);

    if (!voice) {
      setDiagnosticMessage("❌ Selected voice not found. Try reloading or checking browser support.");
      return;
    }

    const pageText = getReadablePageText(customText);
    if (!pageText) {
      setDiagnosticMessage(
        "❌ Nothing to read yet. Type in the editor or form fields, then tap Speak Page."
      );
      return;
    }

    chunksRef.current = splitIntoChunks(pageText);
    chunkIndexRef.current = 0;

    window.speechSynthesis.cancel();
    setSpeaking(true);
    setDiagnosticMessage("");
    speakChunk(voice);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    chunkIndexRef.current = 0;
    chunksRef.current = [];
    setSpeaking(false);
  };

  const handleDiagnostic = () => {
    if (!("speechSynthesis" in window)) {
      setDiagnosticMessage("❌ This device does not support speech synthesis.");
      return;
    }

    const availableVoices = window.speechSynthesis.getVoices();
    if (availableVoices.length === 0) {
      setDiagnosticMessage("⚠️ Speech synthesis supported, but no voices available. Please reload the page.");
    } else {
      setDiagnosticMessage(`✅ ${availableVoices.length} voices available. Selected: ${selectedVoice}`);
    }
  };

  return (
    <div className={styles.container}>
      {/* Dropdown for language/voice selection */}
      <select
        className={styles.dropdown}
        value={selectedVoice || ""}
        onChange={(e) => setSelectedVoice(e.target.value)}
        disabled={speaking} // disable when speaking
      >
        {voices.map((voice, index) => (
          <option key={index} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      {/* Buttons */}
      <button className={styles.button} onClick={handleSpeak} disabled={speaking}>
        🔊 Speak Page
      </button>
      <button className={styles.button} onClick={handleStop}>
        ⏹️ Stop
      </button>
      <button className={styles.button} onClick={handleDiagnostic}>
        🧪 Run Diagnostic
      </button>

      {diagnosticMessage && (
        <p className={styles.diagnosticMessage}>{diagnosticMessage}</p>
      )}
    </div>
  );
};

export default FullPageSpeech;
