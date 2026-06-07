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
      title: "Department Culture Blog",
      subtitle:
        "Stories, reflections, and updates from the heart of our college community.",
      admission:
        "Stay tuned for departmental news, student initiatives, and exciting opportunities that shape our journey.",
      quote:
        "Education is not just about books—it’s about the culture we create together.",
      impact:
        "Our department culture inspires collaboration, sparks innovation, embraces inclusivity, and nurtures lifelong learning.",
    },
    hi: {
      title: "विभागीय संस्कृति ब्लॉग",
      subtitle: "हमारे कॉलेज समुदाय की कहानियाँ और अनुभव।",
      admission:
        "विभागीय समाचार, छात्र पहल और नए अवसरों से जुड़े रहें।",
      quote:
        "शिक्षा केवल पुस्तकों तक सीमित नहीं है, बल्कि उस संस्कृति तक है जिसे हम मिलकर बनाते हैं।",
      impact:
        "हमारी विभागीय संस्कृति सहयोग, नवाचार, समावेशिता और आजीवन सीखने को प्रोत्साहित करती है।",
    },
  };

  const sections = {
    studentLife: (
      <div className={styles.cardGrid}>
        <div className={styles.card}>🎓 Student Achievements & Success Stories</div>
        <div className={styles.card}>🤝 Community Engagement & Volunteering</div>
        <div className={styles.card}>🌍 Global Exchange & Cultural Programs</div>
        <div className={styles.card}>📖 Campus Diaries & Everyday Moments</div>
      </div>
    ),
    academics: (
      <ul>
        <li>Cutting‑Edge Research Highlights</li>
        <li>Faculty Publications & Thought Leadership</li>
        <li>Interactive Workshops & Inspiring Seminars</li>
      </ul>
    ),
    events: (
      <ul>
        <li>Annual Department Meet – March</li>
        <li>Innovation Hackathon – June</li>
        <li>Global Research Symposium – November</li>
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
          src="/fashion1.jpg"
          alt="Department Culture"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Quote */}
      <div className={styles.quote}>“{text[language].quote}”</div>

      {/* Department Updates */}
      <section className={styles.section}>
        <h2>📌 Latest Department Updates</h2>
        <p>{text[language].admission}</p>
      </section>

      {/* Explore Blog Topics */}
      <section className={styles.section}>
        <h2>🔎 Explore Blog Topics</h2>
        <div className={styles.buttonGroup}>
          <button onClick={() => setActiveSection("studentLife")}>
            🎨 Student Life
          </button>
          <button onClick={() => setActiveSection("academics")}>
            📚 Academics
          </button>
          <button onClick={() => setActiveSection("events")}>
            🎉 Events
          </button>
        </div>

        {activeSection && (
          <div className={styles.sectionContent}>
            {sections[activeSection]}
          </div>
        )}
      </section>

      {/* Department Milestones */}
      <section className={styles.section}>
        <h2>🕰 Department Milestones</h2>
        <ul className={styles.timeline}>
          <li><strong>1987:</strong> Department established with a vision for excellence</li>
          <li><strong>2005:</strong> Hosted first national seminar</li>
          <li><strong>2015:</strong> Expanded into international collaborations</li>
          <li><strong>2024:</strong> Launched digital knowledge hub</li>
        </ul>
      </section>

      {/* Student Societies */}
      <section className={styles.section}>
        <h2>🎭 Student Societies</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>💻 Coding Club</div>
          <div className={styles.card}>🔬 Research Circle</div>
          <div className={styles.card}>🚀 Innovation Hub</div>
          <div className={styles.card}>✍️ Creative Writing Society</div>
        </div>
      </section>

      {/* Spotlight of the Month */}
      <section className={styles.section}>
        <h2>🌟 Spotlight of the Month</h2>
        <p>
          This month we celebrate <strong>student innovators</strong> who showcased
          groundbreaking projects and research at national and international conferences.
        </p>
      </section>

      {/* Why Department Culture Matters */}
      <section className={styles.section}>
        <h2>🎯 Why Department Culture Matters</h2>
        <p>
          Our department culture is more than just a set of traditions—it is the heartbeat of our academic journey. 
          It shapes the way students interact, collaborate, and grow together. 
          Every classroom discussion, every late-night brainstorming session, and every cultural event adds to this shared identity. 
          Seniors guide juniors not only in academics but also in navigating life, creating a chain of mentorship that lasts beyond graduation. 
          Faculty members encourage curiosity, pushing us to ask questions that go beyond textbooks. 
          The societies and clubs bring together diverse talents, proving that innovation thrives in inclusivity. 
          Whether it’s coding marathons, creative writing workshops, or research circles, each initiative reflects the passion of our community. 
          The annual events remind us that achievements are not individual milestones but collective celebrations. 
          This culture teaches us resilience, adaptability, and empathy—qualities that prepare us for challenges outside the campus. 
          In the end, department culture is not just about what we learn, but about who we become together.
        </p>
      </section>

      {/* Blog Highlights */}
      <section className={styles.gallery}>
        <h2>📸 Blog Highlights</h2>
        <div className={styles.galleryGrid}>
          <Image src="/davvcultural3.jpg" alt="Seminar Session" width={300} height={200} />
          <Image src="/davvcultural4.jpg" alt="Workshop Activity" width={300} height={200} />
          <Image src="/cultural1.jpg" alt="Conference Presentation" width={300} height={200} />
        </div>
      </section>

      {/* Feedback */}
      <section className={styles.section}>
        <h2>💬 Student Voices</h2>
        <Comments />

        <textarea
          className={styles.textarea}
          placeholder="Share your reflections..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button className={styles.submitBtn} onClick={handleFeedbackSubmit}>
          Submit Feedback
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