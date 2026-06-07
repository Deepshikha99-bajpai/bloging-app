"use client";

import { useState, useEffect } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const CodingExperiencePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [copyLabel, setCopyLabel] = useState("Copy Code");

  // New Feature: Coding Experience Content
  const experiences = [
    "Started with basic HTML/CSS, realizing that layout is harder than it looks.",
    "The 'Eureka' moment when JavaScript logic finally clicked.",
    "Learning React was like learning to think in components instead of pages.",
    "The pain of debugging a production error at 2 AM—best teacher ever.",
    "TypeScript felt like a hurdle at first, but now I can't live without it.",
    "API integration taught me the importance of handling 'undefined' gracefully.",
    "Next.js revolutionized my workflow with Server Components and Routing.",
    "CSS-in-JS vs Tailwind: The great debate of 2024 in my personal projects.",
    "Realizing that clean code is written for humans, not for machines.",
    "The journey never ends; staying curious is the only way to survive in tech."
  ];

  // Featured Code Snippet
  const sharedCode = `export default function DevExperience() {
  const [growth, setGrowth] = useState("exponential");

  return (
    <div className="coding-journey">
      <h1>Infinite Learning</h1>
      <button onClick={() => setGrowth("∞")}>Debug Life</button>
    </div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sharedCode);
    setCopyLabel("Copied! ✅");
    setTimeout(() => setCopyLabel("Copy Code"), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollWidth((winScroll / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      {/* FEATURE: Reading Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${scrollWidth}%` }}></div>
      </div>
ev
      <header className={styles.header}>
        <div className={styles.brand}>
          <h1 className={styles.glitchText}>&lt;CodeLog /&gt;</h1>
          <p>Documenting the journey from 0 to 1.</p>
        </div>
        <button className={styles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* HERO SECTION - Optimized Image Distance */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image src="/code2.jpg" alt="Coding Setup" fill className={styles.heroImg} priority />
          <div className={styles.heroOverlay}>
            <h2>My Coding Evolution: 2024-2026</h2>
          </div>
        </div>
      </section>

      <main className={styles.layout}>
        <section className={styles.mainPost}>
          {/* THE 10 LINE THEORY */}
          <div className={styles.experienceSection}>
            <h2 className={styles.titleWithIcon}>🚀 My Coding Journey</h2>
            <div className={styles.experienceGrid}>
              {experiences.map((exp, i) => (
                <div key={i} className={styles.expCard}>
                  <span className={styles.stepNumber}>{i + 1}</span>
                  <p>{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SHARED CODE FEATURE */}
          <div className={styles.codeShare}>
            <div className={styles.codeHeader}>
              <span>React Component Snippet</span>
              <button onClick={handleCopy} className={styles.copyBtn}>{copyLabel}</button>
            </div>
            <pre className={styles.codeBlock}>
              <code>{sharedCode}</code>
            </pre>
          </div>

          {/* INFRASTRUCTURE GALLERY - Adjusted Spacing */}
          <div className={styles.gallerySection}>
            <h2>🛠️ Tech Stack & Workspace</h2>
            <div className={styles.imageGrid}>
              <div className={styles.imgContainer}><Image src="/code4.jpg" alt="Work" width={400} height={250} /></div>
              <div className={styles.imgContainer}><Image src="/code5.jpg" alt="Hardware" width={400} height={250} /></div>
            </div>
          </div>
          

          <div className={styles.commentSection}>
            <h2>💬 Thoughts?</h2>
            <Comments />
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.stickyMenu}>
            <Menu />
          </div>
        </aside>
      </main>

      <div className={styles.speechWidget}>
</div>

      <footer className={styles.footer}>
        <p>© 2026 Coding Experience Blog | Built with Next.js</p>
      </footer>
    </div>
  );
};

export default CodingExperiencePage;
