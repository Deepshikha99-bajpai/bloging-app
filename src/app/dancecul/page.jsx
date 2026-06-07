"use client";

import { useState } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const CollegePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      title: "Welcome to Cultural Heritage",
      subtitle:
        "Celebrating dance, music, traditions, and creative expressions.",
      admission:
        "Admissions are open for 2025–26. Join a vibrant campus where culture meets education.",
      quote:
        "Culture is the widening of the mind and of the spirit.",
      impact:
        "Cultural activities help students build confidence, leadership, creativity, and emotional intelligence.",
    },
    hi: {
      title: "सांस्कृतिक विरासत में आपका स्वागत है",
      subtitle:
        "नृत्य, संगीत, परंपरा और रचनात्मक अभिव्यक्ति का उत्सव।",
      admission:
        "2025–26 के लिए प्रवेश खुले हैं। संस्कृति और शिक्षा का संगम।",
      quote:
        "संस्कृति मन और आत्मा का विस्तार है।",
      impact:
        "सांस्कृतिक गतिविधियाँ आत्मविश्वास, नेतृत्व और रचनात्मकता को बढ़ाती हैं।",
    },
  };

  const sections = {
    culture: (
      <div className={styles.cardGrid}>
        <div className={styles.card}>💃 Classical & Folk Dance</div>
        <div className={styles.card}>🎵 Music & Instrumental Arts</div>
        <div className={styles.card}>🎭 Theatre & Drama</div>
        <div className={styles.card}>🪔 Indian Festivals</div>
      </div>
    ),
    courses: (
      <ul>
        <li>B.Sc (Electronics, CS, Mathematics)</li>
        <li>M.Sc (Electronics & Communication)</li>
        <li>M.Tech (Embedded Systems)</li>
      </ul>
    ),
    events: (
      <ul>
        <li>Annual Cultural Fest – May</li>
        <li>Dance Workshop – July</li>
        <li>Music Night – October</li>
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
          src="/dance4.jpg"
          alt="Culture"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Quote */}
      <div className={styles.quote}>
        “{text[language].quote}”
      </div>

      {/* Admission */}
      <section className={styles.section}>
        <h2>📌 Admission</h2>
        <p>{text[language].admission}</p>
      </section>

      {/* Explore */}
      <section className={styles.section}>
        <h2>Explore Culture</h2>
        <div className={styles.buttonGroup}>
          <button onClick={() => setActiveSection("culture")}>🎨 Culture</button>
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
        <h2>🕰 Cultural Journey</h2>
        <ul className={styles.timeline}>
          <li><strong>1987:</strong> Foundation of cultural society</li>
          <li><strong>2005:</strong> First inter-university fest</li>
          <li><strong>2015:</strong> National level recognition</li>
          <li><strong>2024:</strong> Digital cultural archive launched</li>
        </ul>
      </section>

      {/* Clubs */}
      <section className={styles.section}>
        <h2>🎭 Cultural Clubs</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Nritya Kala Club</div>
          <div className={styles.card}>Swaranjali Music Club</div>
          <div className={styles.card}>Rangmanch Drama Club</div>
          <div className={styles.card}>Creative Arts Society</div>
        </div>
      </section>

      {/* Artist of the Month */}
      <section className={styles.section}>
        <h2>🌟 Artist of the Month</h2>
        <p>
          This month we celebrate <strong>student performers</strong> who
          showcased excellence in dance, music, and theatre at national events.
        </p>
      </section>

      {/* Impact */}
      <section className={styles.section}>
        <h2>🎯 Why Culture Matters</h2>
        <p>{text[language].impact}</p>
      </section>

      {/* Dance Blog Section */}
      <section className={styles.section}>
        <h2>💃 Dance Insights</h2>
        <p>
          Dance is one of the oldest forms of human expression, blending rhythm and movement into art.  
          It tells stories without words, conveying emotions through gestures and steps.  
          Classical dance forms like Bharatanatyam and Kathak preserve centuries of tradition.  
          Folk dances such as Garba and Bhangra celebrate community and joy.  
          Modern dance styles bring innovation, merging global influences with creativity.  
          Dance improves physical fitness, flexibility, and coordination.  
          It also nurtures discipline, patience, and dedication in performers.  
          Students learn teamwork and confidence by participating in group performances.  
          Dance bridges cultures, connecting people across languages and regions.  
          Ultimately, dance is a celebration of life, energy, and the human spirit.  
        </p>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <h2>📸 Cultural Moments</h2>
        <div className={styles.galleryGrid}>
          <Image src="/cultural1.jpg" alt="dance" width={300} height={200} />
          <Image src="/davvcultural3.jpg" alt="music" width={300} height={200} />
          <Image src="/davvcultural4.jpg" alt="fest" width={300} height={200} />
        </div>
      </section>

      {/* Feedback */}
      <section className={styles.section}>
        <h2>💬 Student Voices</h2>
        <Comments />

        <textarea
          className={styles.textarea}
          placeholder="Share your cultural experience..."
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
