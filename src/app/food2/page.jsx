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

  const sections = {
    canteen: (
      <div className={styles.subSection}>
        <h3>🍕 DAVV Canteen</h3>
        <p>
          The DAVV canteen is a lively hub where students gather for quick bites
          and long conversations. I enjoyed the masala dosa, samosas, and chai —
          all served fresh and affordable.
        </p>
        <ul>
          <li>South Indian delicacies like dosa & idli</li>
          <li>Street food favorites: samosa, poha, kachori</li>
          <li>Refreshing chai & cold coffee</li>
          <li>Affordable prices for students</li>
        </ul>
      </div>
    ),
    mess: (
      <div className={styles.subSection}>
        <h3>🍲 College Mess</h3>
        <p>
          The mess offers wholesome meals three times a day. I found the food
          simple yet satisfying, with balanced nutrition and a homely touch.
        </p>
        <ul>
          <li>Breakfast: Poha, Paratha, Tea</li>
          <li>Lunch: Rice, Dal, Chapati, Vegetables</li>
          <li>Dinner: Paneer Curry, Roti, Dessert</li>
          <li>Special weekend thali with sweets</li>
        </ul>
      </div>
    ),
    festivals: (
      <div className={styles.subSection}>
        <h3>🎉 Food Festivals</h3>
        <p>
          DAVV celebrates food festivals with great enthusiasm. I loved the
          variety of stalls offering regional cuisines and the vibrant
          atmosphere.
        </p>
        <ul>
          <li>Food Carnival – January</li>
          <li>Street Food Fiesta – March</li>
          <li>Regional Cuisine Week – August</li>
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
          <h1>My Experience at DAVV Food Culture</h1>
          <p>
            Sharing my journey through the canteen, mess, and food festivals at
            DAVV — where taste meets tradition.
          </p>
        </div>

        <div className={styles.user}>
          <Image
            src="/food4.jpg"
            alt="DAVV Food Logo"
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>DAVV Food Blog</span>
            <span className={styles.date}>Visited January 2026</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/food3.png"
          alt="DAVV Canteen"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Intro */}
          <div className={styles.section}>
            <h2>📌 First Impressions</h2>
            <p>
              The food culture at DAVV is vibrant and diverse. From the bustling
              canteen to the homely mess and festive food events, every corner
              has a flavor of its own.
            </p>
          </div>

          {/* Explore More */}
          <div className={styles.section}>
            <h2>Explore More</h2>
            <div className={styles.buttonGroup}>
              <button onClick={() => handleToggle("canteen")}>🍕 Canteen</button>
              <button onClick={() => handleToggle("mess")}>🍲 Mess</button>
              <button onClick={() => handleToggle("festivals")}>🎉 Festivals</button>
            </div>

            {activeSection && (
              <div className={styles.sectionContent}>
                {sections[activeSection]}
              </div>
            )}
          </div>

          {/* Food Culture */}
          <div className={styles.librarySection}>
            <h2>🍴 Food Culture at DAVV</h2>

            <p className={styles.libraryIntro}>
              Food at DAVV is not just about eating — it’s about community,
              celebration, and comfort. I experienced warmth in every meal.
            </p>

            <div className={styles.libraryContent}>
              <div className={styles.libraryText}>
                <p>
                  Students gather over chai and snacks, celebrate festivals with
                  special menus, and enjoy regional delicacies. Hygiene and
                  affordability make the food culture welcoming for everyone.
                </p>

                <ul>
                  <li>🍛 Variety of cuisines daily</li>
                  <li>🥗 Hygienic & nutritious meals</li>
                  <li>☕ Popular chai & coffee corners</li>
                  <li>🍧 Festive specials during events</li>
                  <li>🕘 Open: 7 AM – 10 PM</li>
                </ul>
              </div>

              <div className={styles.libraryImages}>
                <Image
                  src="/food5.jpg"
                  alt="DAVV Food Stall"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
                <Image
                  src="/food6.jpg"
                  alt="DAVV Food Festival"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className={styles.comment}>
            <h2>💬 Share Your Food Experience</h2>
            <Comments />

            <div className={styles.feedbackInput}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write about your DAVV food experience..."
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
