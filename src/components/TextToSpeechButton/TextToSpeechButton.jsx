"use client";

import React from "react";

const TextToSpeechButton = ({ text }) => {
  const speakText = () => {
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your VoiceRSS API key
    const url = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(
      text
    )}&c=MP3`;

    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
      <button onClick={speakText} style={{ borderRadius: '50%', width: '40px', height: '40px', fontSize: '16px', border: 'none', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}>
        🔊
      </button>
      <span style={{ fontSize: '10px', marginTop: '3px' }}>Listen</span>
    </div>
  );
};

export default TextToSpeechButton;
