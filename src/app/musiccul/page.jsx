"use client";

import { useState } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const CollegePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      title: "Welcome to the Music Club",
      subtitle: "Celebrating rhythm, melody, instruments, and creative performances.",
      admission:
        "Admissions are open for 2025–26. Join a vibrant club where music meets passion.",
      quote: "Music is the language of the soul.",
      impact:
        "Music activities help students build confidence, teamwork, creativity, and emotional expression.",
    },
    hi: {
      title: "संगीत क्लब में आपका स्वागत है",
      subtitle: "ताल, धुन, वाद्ययंत्र और रचनात्मक प्रस्तुतियों का उत्सव।",
      admission:
        "2025–26 के लिए प्रवेश खुले हैं। यहाँ संगीत और जुनून का संगम है।",
      quote: "संगीत आत्मा की भाषा है।",
      impact:
        "संगीत गतिविधियाँ आत्मविश्वास, टीमवर्क और रचनात्मकता को बढ़ाती हैं।",
    },
  };

  const sections = {
    music: (
      <div className={styles.cardGrid}>
        <div className={styles.card}>🎸 Guitar & Strings</div>
        <div className={styles.card}>🎹 Piano & Keyboard</div>
        <div className={styles.card}>🥁 Percussion & Drums</div>
        <div className={styles.card}>🎤 Vocals & Choir</div>
      </div>
    ),
    courses: (
      <ul>
        <li>Diploma in Music Production</li>
        <li>Certificate in Classical Vocals</li>
        <li>Advanced Instrumental Training</li>
      </ul>
    ),
    events: (
      <ul>
        <li>Annual Music Fest – May</li>
        <li>Rock Night – July</li>
        <li>Classical Evening – October</li>
      </ul>
    ),
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>{text[language].title}</h1>
        <p>{text[language].subtitle}</p>

        <div className={styles.headerButtons}>
          <button
            className={styles.langBtn}
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          >
            🌐 {language === "en" ? "Hindi" : "English"}
          </button>

        </div>
</div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/davvmusic.jpg"
          alt="Music Club"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Quote */}
      <div className={styles.quote}>“{text[language].quote}”</div>

      {/* Admission */}
      <section className={styles.section}>
        <h2>📌 Admission</h2>
        <p>{text[language].admission}</p>
      </section>

      {/* Explore */}
      <section className={styles.section}>
        <h2>Explore Music</h2>
        <div className={styles.buttonGroup}>
          <button onClick={() => setActiveSection("music")}>🎶 Music</button>
          <button onClick={() => setActiveSection("courses")}>📚 Courses</button>
          <button onClick={() => setActiveSection("events")}>🎉 Events</button>
        </div>

        {activeSection && (
          <div className={styles.sectionContent}>
            {sections[activeSection]}
          </div>
        )}
      </section>

      {/* Timeline */}
      <section className={styles.section}>
        <h2>🕰 Musical Journey</h2>
        <ul className={styles.timeline}>
          <li><strong>1990:</strong> Foundation of Music Club</li>
          <li><strong>2008:</strong> First inter-college concert</li>
          <li><strong>2018:</strong> National level recognition</li>
          <li><strong>2025:</strong> Digital music archive launched</li>
        </ul>
      </section>

      {/* Clubs */}
      <section className={styles.section}>
        <h2>🎵 Music Clubs</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Swaranjali Vocals Club</div>
          <div className={styles.card}>Rhythm Percussion Club</div>
          <div className={styles.card}>Strings & Guitar Society</div>
          <div className={styles.card}>Fusion Music Collective</div>
        </div>
      </section>

      {/* Artist of the Month */}
      <section className={styles.section}>
        <h2>🌟 Artist of the Month</h2>
        <p>
          This month we celebrate <strong>student musicians</strong> who
          showcased excellence in vocals, instruments, and live performances.
        </p>
      </section>

      {/* Impact */}
      <section className={styles.section}>
        <h2>🎯 Why Music Matters</h2>
        <p>{text[language].impact}</p>
      </section>

      {/* Blog Section */}
      <section className={styles.section}>
        <h2>📝 Music Blog</h2>
        <p>
          Music is not just entertainment; it is a powerful force that connects
          people across cultures and generations. It has the ability to heal,
          inspire, and bring joy even in the toughest times. From classical
          ragas to modern rock, every genre carries its own story and emotion.
          Students who engage with music often discover hidden talents and
          develop discipline through practice. Music also strengthens memory,
          improves focus, and nurtures creativity in everyday life. Whether
          performed on stage or enjoyed in solitude, music remains a timeless
          companion that enriches the human experience.
        </p>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <h2>📸 Musical Moments</h2>
        <div className={styles.galleryGrid}>
          <Image src="/music1.jpg" alt="concert" width={300} height={200} />
          <Image src="/music2.jpg" alt="band" width={300} height={200} />
          <Image src="/davvmusic.jpg" alt="performance" width={300} height={200} />
        </div>
      </section>

      {/* Feedback */}
      <section className={styles.section}>
        <h2>💬 Student Voices</h2>
        <Comments />

        <textarea
          className={styles.textarea}
          placeholder="Share your music experience..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button className={styles.submitBtn} onClick={handleFeedbackSubmit}>
          Submit
        </button>

        <ul className={styles.feedbackList}>
          {feedbackList.map((item, i) => (
            <li key={i}>🌟 {item}</li>
          ))}
        </ul>
      </section>

      <Menu />
    </div>
  );
};
 
export default CollegePage;
