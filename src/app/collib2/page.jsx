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

  const sections = {
    courses: (
      <div className={styles.subSection}>
        <ul>
          <li>B.Sc (Electronics, Computer Science, Mathematics)</li>
          <li>M.Sc (Electronics & Communications)</li>
          <li>M.Tech (Embedded Systems)</li>
          <li>M.Tech (Executive – Embedded Systems)</li>
        </ul>
      </div>
    ),
    faculty: (
      <div className={styles.subSection}>
        <p>
          Our faculty members are experienced academicians and researchers from
          reputed institutions.
        </p>
        <ul>
          <li>Dr. Manju K. Chattopadhyay</li>
          <li>Dr. Priya Sharma</li>
          <li>Prof. David Lee</li>
        </ul>
      </div>
    ),
    events: (
      <div className={styles.subSection}>
        <ul>
          <li>TechFest – March</li>
          <li>Annual Sports Meet – April</li>
          <li>Cultural Fest – May</li>
        </ul>
      </div>
    ),
  };

  const handleToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
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
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Welcome to the College Library</h1>
          <p>
            Empowering students with knowledge, research facilities, and digital
            learning resources.
          </p>
        </div>

        <div className={styles.user}>
          <Image
            src="/library3.jpg"
            alt="College Logo"
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>College Library</span>
            <span className={styles.date}>Established 1987</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/library2.jpg"
          alt="College Campus"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Admission */}
          <div className={styles.section}>
            <h2>📌 Admission</h2>
            <p>
              Admissions are open for the academic year 2025–26. Scholarships are
              available based on merit and entrance examinations.
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

          {/* Central Library */}
          <div className={styles.librarySection}>
            <h2>📚 Central Library</h2>

            <p className={styles.libraryIntro}>
              The College Library is the academic backbone of the institution,
              providing students and researchers with access to extensive
              learning resources in a calm and focused environment.
            </p>

            <div className={styles.libraryContent}>
              <div className={styles.libraryText}>
                <p>
                  The library maintains a rich collection of textbooks,
                  reference books, journals, research papers, dissertations,
                  and digital learning materials. Modern infrastructure supports
                  both traditional and e-learning methods.
                </p>

                <p>
                  Dedicated reading halls, computer terminals, digital sections,
                  and research assistance desks ensure a high-quality academic
                  experience.
                </p>

                <ul>
                  <li>📖 60,000+ Books & Reference Materials</li>
                  <li>💻 Digital Library & E-Journals</li>
                  <li>🪑 Silent Study & Discussion Zones</li>
                  <li>📡 High-Speed Wi-Fi</li>
                  <li>🎓 Research Support for UG, PG & PhD</li>
                  <li>🕘 Open: 9 AM – 8 PM</li>
                </ul>
              </div>

              <div className={styles.libraryImages}>
                <Image
                  src="/library1.jpg"
                  alt="Library Building"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
                <Image
                  src="/library2.jpg"
                  alt="Reading Hall"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
              </div>
            </div>
          </div>

          {/* Feedback */}
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

      {/* Floating Speech Button */}
</div>
  );
};

export default CollegePage;
