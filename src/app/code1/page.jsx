"use client";

import { useState, useEffect } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const CodingBlogPage = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy Code");
  const [scrollProgress, setScrollProgress] = useState(0);

  // New Feature: Interactive Poll State
  const [pollVote, setPollVote] = useState(null);

  const codeSnippet = `const greet = () => {\n  console.log("Hello, World!");\n};`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyStatus("Copied! ✅");
    setTimeout(() => setCopyStatus("Copy Code"), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll to Top visibility
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);

      // Update Reading Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      {/* READING PROGRESS BAR */}
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* HEADER */}
      <header className={styles.infoContainer}>
        <div className={styles.brand}>
          <h1 className={styles.fadeIn}>&lt;Coding /&gt; <span className={styles.highlight}>Insights</span></h1>
          <p>The bridge between logic and creativity.</p>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.userBadge}>
            <Image src="/code3.jpg" alt="Author" width={45} height={45} className={styles.avatar} />
            <div className={styles.userText}>
              <span className={styles.username}>Dev Journal</span>
              <span className={styles.status}>🟢 Online</span>
            </div>
          </div>
          <button className={styles.toggleBtn} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* FEATURED HERO IMAGE */}
      <section className={styles.heroSection}>
        <Image 
          src="/code2.jpg" 
          alt="Coding Workspace" 
          fill 
          className={styles.heroImg} 
          priority 
        />
        <div className={styles.heroOverlay}>
          <span className={styles.tag}>FEATURED ARTICLE</span>
          <h2>The 2026 Developer Roadmap</h2>
          <p>Mastering the transition from Full-stack to AI-integrated Engineering.</p>
        </div>
      </section>

      <main className={styles.content}>
        <section className={styles.post}>
          
          {/* 10 LINE THEORY SECTION */}
          <article className={styles.articleSection}>
            <h2 className={styles.sectionTitle}>🚀 The Evolution of Modern Web Development</h2>
            <div className={styles.theoryCard}>
              {[
                "Modern web development has shifted from static pages to dynamic, component-driven architectures.",
                "React and Next.js dominate the landscape by providing powerful Server-Side Rendering (SSR) capabilities.",
                "Performance optimization is no longer optional; it is a core requirement for SEO.",
                "TypeScript has become the industry standard, ensuring type safety and reducing runtime errors.",
                "Utility-first frameworks like Tailwind have redefined how we approach responsive styling.",
                "Edge computing now allows us to run logic closer to the user for lower latency.",
                "State management has evolved from complex Redux setups to lightweight hooks and signals.",
                "Accessibility (a11y) is now integrated into the development workflow.",
                "AI-driven tools like Copilot are augmenting developer productivity by automating boilerplate.",
                "The future lies in seamless full-stack integration where the line between frontend and backend blurs."
              ].map((line, i) => (
                <p key={i} className={styles.theoryLine}>
                  <span className={styles.lineNumber}>{i + 1}</span> {line}
                </p>
              ))}
            </div>
          </article>

          {/* CODE SNIPPET FEATURE */}
          <div className={styles.codeWrapper}>
            <div className={styles.codeHeader}>
              <div className={styles.dots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <button onClick={handleCopy} className={styles.copyBtn}>{copyStatus}</button>
            </div>
            <pre className={styles.codeBlock}>
              <code>{codeSnippet}</code>
            </pre>
          </div>

          {/* NEW FEATURE: INTERACTIVE POLL */}
          <div className={styles.pollSection}>
            <h3>📊 Quick Poll: Favorite State Manager?</h3>
            <div className={styles.pollOptions}>
              {['Zustand', 'Redux Toolkit', 'Context API'].map((option) => (
                <button 
                  key={option} 
                  className={`${styles.pollBtn} ${pollVote === option ? styles.activeVote : ""}`}
                  onClick={() => setPollVote(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {pollVote && <p className={styles.voteThanks}>Thanks for voting for {pollVote}!</p>}
          </div>

          <div className={styles.section}>
            <h2>💬 Community Discussion</h2>
            <Comments />
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.stickySidebar}>
            <Menu />
          </div>
        </aside>
      </main>
{showScroll && (
        <button className={styles.scrollTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ⬆️
        </button>
      )}
    </div>
  );
};

export default CodingBlogPage;
