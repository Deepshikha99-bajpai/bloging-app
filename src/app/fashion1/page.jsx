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
    fashionTrends: (
      <div className={styles.subSection}>
        <h3>👗 Campus Fashion Trends</h3>
        <p>
          Every season brings a new wave of creativity to campus.  
          Students experiment with sustainable fabrics, bold prints, and chic accessories.  
          The corridors feel like runways where individuality shines.  
          Fashion clubs organize weekly showcases of student‑designed outfits.  
          A vibrant mix of tradition and modernity defines our campus style.
        </p>
      </div>
    ),
    designers: (
      <div className={styles.subSection}>
        <h3>🧵 Student Designers Spotlight</h3>
        <p>
          Our student designers are redefining fashion with innovation.  
          From eco‑friendly couture to digital fashion sketches, creativity knows no bounds.  
          Many have already launched their own mini‑brands on campus.  
          Workshops help them refine their craft and present collections.  
          Each designer brings a unique voice to the fashion narrative.
        </p>
      </div>
    ),
    events: (
      <div className={styles.subSection}>
        <h3>🎉 Fashion Events & Festivals</h3>
        <p>
          The campus calendar is filled with stylish events.  
          Annual fashion shows highlight sustainable and futuristic designs.  
          Cultural fests include themed runway walks and costume contests.  
          TechFest features wearable technology competitions.  
          Every event blends glamour with innovation, making campus life unforgettable.
        </p>
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
      {/* Hero Banner */}
      <header className={styles.heroBanner}>
        <Image
          src="/fashion-banner.jpg"
          alt="Fashion Blog Banner"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroText}>
          <h1>✨ College Fashion Chronicles</h1>
          <p>Where knowledge meets style & inspiration</p>
          {/* Added descriptive text after heading */}
          <div className={styles.heroIntro}>
            <p>
              Welcome to the world where fashion meets education.  
              Our campus is not just about books and lectures — it’s a runway of ideas.  
              Students here redefine style daily, blending tradition with modern innovation.  
              From sustainable fabrics to bold accessories, creativity thrives in every corner.  
              Join us as we showcase stories, trends, and events that make college life truly fashionable.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.content}>
        <article className={styles.post}>
          {/* Admission */}
          <section className={styles.sectionCard}>
            <h2>📌 Admission Process & Scholarships</h2>
            <p>
              Admissions are open for the academic year 2025–26. Apply now to
              join one of the most fashion‑forward institutions in the country.  
              Scholarships are available for students excelling in sustainable fashion projects.
            </p>
          </section>

          {/* Explore More */}
          <section className={styles.sectionCard}>
            <h2>🔎 Explore Fashion Blog Sections</h2>
            <div className={styles.buttonGroup}>
              <button onClick={() => handleToggle("fashionTrends")}>👗 Trends</button>
              <button onClick={() => handleToggle("designers")}>🧵 Designers</button>
              <button onClick={() => handleToggle("events")}>🎉 Events</button>
            </div>
            {activeSection && (
              <div className={styles.sectionContent}>
                {sections[activeSection]}
              </div>
            )}
          </section>

          {/* Gallery */}
          <section className={styles.sectionCard}>
            <h2>📸 Campus Gallery Highlights</h2>
            <p>
              Our campus is a runway of ideas — from chic study lounges to fashion‑tech labs, every corner inspires creativity.
            </p>
            <div className={styles.gallery}>
              <Image
                src="/ims.png"
                alt="Campus View"
                width={500}
                height={300}
                className={styles.galleryImage}
              />
              <Image
                src="/ims1.png"
                alt="Student Life"
                width={500}
                height={300}
                className={styles.galleryImage}
              />
            </div>
          </section>

          {/* Feedback */}
          <section className={styles.sectionCard}>
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
          </section>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <Menu />
          <div className={styles.trendingCard}>
            <h3>🔥 Trending Fashion Posts</h3>
            <ul>
              <li>👗 Top 10 Campus Fashion Trends</li>
              <li>🧵 How Students Create Their Own Brands</li>
              <li>🎭 Fashion Meets Culture: Fest Highlights</li>
            </ul>
          </div>
          <div className={styles.featuredCard}>
            <h3>⭐ Featured Article</h3>
            <p>
              Discover how fashion and education blend seamlessly in our latest editorial piece highlighting student designers.
            </p>
          </div>
        </aside>
      </main>

      {/* Floating Speech Button */}
{/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 College Fashion Chronicles. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CollegePage;
