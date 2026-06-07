"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import FullPageSpeech from "./FullPageSpeech";
import styles from "./fullpageSpeech.module.css";

const SiteSpeech = () => {
  const pathname = usePathname();
  const isEditorPage = pathname === "/write" || pathname === "/contact";
  const [expanded, setExpanded] = useState(!isEditorPage);

  if (pathname === "/login") {
    return null;
  }

  return (
    <div className={`${styles.speechFloating} ${isEditorPage ? styles.speechEditorPage : ""}`}>
      {isEditorPage && !expanded ? (
        <button
          type="button"
          className={styles.speechToggle}
          onClick={() => setExpanded(true)}
          aria-label="Open speech controls"
        >
          🔊
        </button>
      ) : (
        <>
          {isEditorPage && (
            <button
              type="button"
              className={styles.speechMinimize}
              onClick={() => setExpanded(false)}
              aria-label="Minimize speech controls"
            >
              ✕
            </button>
          )}
          <FullPageSpeech />
        </>
      )}
    </div>
  );
};

export default SiteSpeech;
