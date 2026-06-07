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

  const sections = {
    courses: (
      <div className={styles.subSection}>
        <ul>
          <li>B. Sc(Electronics, Computer Science, Mathematics)</li>
          <li>M.Sc (Electronics & Communications)</li>
          <li>M.Tech in Electronics (Specialization: Embedded Systems)</li>
          <li>M.Tech (Embedded Systems)</li>
          <li>M.Tech (Executive) in Embedded Systems</li>
        </ul>
      </div>
    ),
    faculty: (
      <div className={styles.subSection}>
        <p>
          Our faculty members are highly experienced professionals and
          researchers from reputed institutions worldwide.
        </p>
        <ul>
          <li>Dr. Manju K Chattopadhya</li>
          <li>Prof. Michael Johnson (Economics)</li>
          <li>Dr. Priya Sharma (Management Studies)</li>
          <li>Prof. David Lee (Engineering)</li>
        </ul>
      </div>
    ),
    events: (
      <div className={styles.subSection}>
        <p>
          We organize seminars, workshops, and cultural events to enrich
          student life.
        </p>
        <ul>
          <li>TechFest 2025 March 15</li>
          <li>Annual Sports Meet April 10</li>
          <li>Cultural Fest May 5</li>
        </ul>
      </div>
    ),
  };

  const handleToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim() !== "") {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Welcome to the School of Electronics 🎓</h1>
          <p>
            Empowering students with knowledge, skills, and opportunities for a
            brighter future.
          </p>
        </div>
        <div className={styles.user}>
          <div className={styles.userImageContainer}>
            <Image
              src="/electroniclogo.png"
              alt="College Logo"
              width={80}
              height={80}
              className={styles.avatar}
              priority
            />
          </div>
          <div className={styles.userTextContainer}>
            <span className={styles.username}>School Of Electronic</span>
            <span className={styles.date}>Established 1987</span>
          </div>
        </div>
      </div>

      {/* College Image */}
      <div className={styles.heroImage}>
        <Image
          src="/Electronics.png"
          alt="College Campus"
          width={1200}
          height={500}
          className={styles.image}
          priority
        />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Admission */}
          <div className={styles.section}>
            <h2>📌 Admission</h2>
            <p>
              Admissions are open for the academic year 2025-26. Apply now to
              join one of the leading institutions in the country. Entrance test
              and merit-based scholarships available.
            </p>
          </div>

          {/* Explore More */}
          <div className={styles.section}>
            <h2>Explore More</h2>
            <div className={styles.buttonGroup}>
              <button onClick={() => handleToggle("courses")}>📚 Courses</button>
              <button onClick={() => handleToggle("faculty")}>👨‍🏫 Faculty</button>
              <button onClick={() => handleToggle("events")}>🎉 Events</button>
            </div>

            {activeSection && (
              <div className={styles.sectionContent}>
                {sections[activeSection]}
              </div>
            )}
          </div>

          {/* Cultural Photos Section */}
          <div className={styles.section}>
            <h2>🎭 Cultural Highlights</h2>
            <div className={styles.culturalGrid}>
              <div className={styles.culturalBlock}>
                <Image src="/mine.jpeg" alt="Dance Event" fill className={styles.fullImage} />
                <p>Annual Dance Competition</p>
              </div>
              <div className={styles.culturalBlock}>
                <Image src="/mine1.jpeg" alt="Music Fest" fill className={styles.fullImage} />
                <p>Music Fest</p>
              </div>
              <div className={styles.culturalBlock}>
                <Image src="/group2.jpeg" alt="Drama Play" fill className={styles.fullImage} />
                <p>Drama & Theatre</p>
              </div>
              <div className={styles.culturalBlock}>
                <Image src="/teacher.jpeg" alt="Art Exhibition" fill className={styles.fullImage} />
                <p>Art Exhibition</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className={styles.section}>
            <h2>✨ Features</h2>
            <ul className={styles.featuresList}>
              <li>Modern Labs with latest equipment</li>
              <li>Global exchange programs</li>
              <li>Scholarships for meritorious students</li>
              <li>Strong alumni network</li>
              <li>24/7 Digital Library</li>
            </ul>
          </div>

          {/* Comments */}
          <div className={styles.comment}>
            <h2>💬 Student Feedback</h2>
            <Comments />
            <div className={styles.feedbackInput}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback..."
              />
              <button onClick={handleFeedbackSubmit}>Submit</button>
            </div>
            <ul className={styles.feedbackList}>
              {feedbackList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <Menu />
        </div>
      </div>
</div>
  );
};

export default CollegePage;
