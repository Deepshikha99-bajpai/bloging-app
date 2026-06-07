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
    canteen: (
      <div className={styles.subSection}>
        <h3>🍕 College Canteen</h3>
        <p>
          The canteen is the heart of student life. It offers a wide variety of
          meals and snacks, ranging from traditional Indian thalis to fast food
          favorites. Students gather here not only to eat but also to socialize
          and relax between classes.
        </p>
        <ul>
          <li>Multi-cuisine menu with daily specials</li>
          <li>Fresh juices, coffee, and bakery items</li>
          <li>Affordable pricing for students</li>
          <li>Outdoor seating with a lively atmosphere</li>
        </ul>
      </div>
    ),
    mess: (
      <div className={styles.subSection}>
        <h3>🍲 College Mess</h3>
        <p>
          The mess provides wholesome meals three times a day, ensuring students
          receive balanced nutrition. Meals are prepared with seasonal
          ingredients and cater to both vegetarian and non-vegetarian diets.
        </p>
        <ul>
          <li>Breakfast: Idli, Dosa, Paratha, Bread-Butter</li>
          <li>Lunch: Rice, Dal, Chapati, Seasonal Vegetables</li>
          <li>Dinner: Paneer Curry, Chicken Curry, Dessert</li>
          <li>Special weekend menu with festive dishes</li>
        </ul>
      </div>
    ),
    festivals: (
      <div className={styles.subSection}>
        <h3>🎉 Food Festivals</h3>
        <p>
          Food festivals are celebrated with great enthusiasm, bringing together
          students, faculty, and local vendors. These events showcase regional
          cuisines, innovative recipes, and fun competitions.
        </p>
        <ul>
          <li>Food Carnival  January</li>
          <li>Ice Cream Fest  March</li>
          <li>Regional Cuisine Week  August</li>
          <li>Street Food Fiesta  November</li>
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
          <h1>Welcome to College Food Culture</h1>
          <p>
            Discover the flavors that define our campus life — from nutritious
            mess meals to vibrant canteen snacks and festive food events.
          </p>
        </div>

        <div className={styles.user}>
          <Image
            src="/food4.jpg"
            alt="College Food Logo"
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>College Food Hub</span>
            <span className={styles.date}>Serving Since 1987</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/food3.png"
          alt="College Canteen"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Food Services */}
          <div className={styles.section}>
            <h2>📌 Food Services</h2>
            <p>
              Our food facilities are designed to provide students with healthy,
              affordable, and diverse options. Whether you prefer traditional
              meals or modern fast food, the campus has something for everyone.
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
            <h2>🍴 College Food Culture</h2>

            <p className={styles.libraryIntro}>
              Food is more than just sustenance — it’s a way of building
              community. Our college food culture reflects diversity, tradition,
              and innovation.
            </p>

            <div className={styles.libraryContent}>
              <div className={styles.libraryText}>
                <p>
                  Students enjoy meals together, celebrate festivals with
                  special menus, and explore cuisines from across India. The
                  food spaces are designed to encourage interaction and
                  relaxation.
                </p>

                <p>
                  Hygiene and nutrition are prioritized, with regular checks and
                  feedback systems to ensure quality. The food culture here is a
                  blend of taste, health, and togetherness.
                </p>

                <ul>
                  <li>🍛 100+ Daily Meal Options</li>
                  <li>🥗 Balanced & Hygienic Preparation</li>
                  <li>☕ Coffee, Tea & Beverages</li>
                  <li>🍧 Seasonal & Festive Specials</li>
                  <li>🕘 Open: 7 AM – 10 PM</li>
                </ul>
              </div>

              <div className={styles.libraryImages}>
                <Image
                  src="/food4.jpg"
                  alt="Canteen Area"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
                <Image
                  src="/food2.jpg"
                  alt="Food Festival"
                  width={480}
                  height={300}
                  className={styles.libraryImage}
                />
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className={styles.comment}>
            <h2>💬 Student Food Feedback</h2>
            <Comments />

            <div className={styles.feedbackInput}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your food experience..."
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
