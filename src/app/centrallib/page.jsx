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
    courses: (
      <div className={styles.subSection}>
        <ul>
          <li>B.Sc (Electronics, Computer Science, Mathematics)</li>
          <li>M.Sc (Electronics & Communication)</li>
          <li>M.Tech (Embedded Systems)</li>
          <li>M.Tech (Executive – Embedded Systems)</li>
        </ul>
      </div>
    ),
    faculty: (
      <div className={styles.subSection}>
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
          <li>Sports Meet – April</li>
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
          <h1>Welcome to the Central Library </h1>
          <p>Empowering students with quality education and research.</p>
        </div>

        <div className={styles.user}>
          <Image
            src="/library3.jpg"
            alt="IIPS"
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>Central Library</span>
            <span className={styles.date}>Established 1987</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/libbacK.jpg"
          alt="Campus"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Student Life Adventure Blog */}
      <div className={styles.section}>
        <h2>📖 Student Life Adventures</h2>
        <p>
          Hey everyone! I'm back with another slice of my student life
          adventures. As a busy undergrad juggling classes, part-time gigs, and
          the occasional existential crisis, finding a quiet spot to dive into
          textbooks and research is like striking gold. That's why I headed to
          the Central Library yesterday for a full-day study marathon. Let me
          spill the tea on my experience—spoiler: it was a game-changer.
        </p>

        <h3>The Arrival: First Impressions Matter</h3>
        <p>
          I rolled up around 9 AM, armed with my laptop, notebooks, and a
          thermos of coffee (because who can study without caffeine?). The
          Central Library is this majestic building right in the heart of the
          city—think towering shelves, grand architecture, and that unmistakable
          scent of old books mixed with fresh print. It's not just a library;
          it's a sanctuary. The entrance was welcoming, with friendly staff at
          the desk who checked me in without any hassle. Pro tip: Bring your
          student ID for free access if you're eligible—saves a few bucks!
        </p>

        <h3>The Study Setup: Finding My Zen Zone</h3>
        <p>
          Once inside, I made a beeline for the quiet study areas on the upper
          floors. The library has dedicated zones: silent floors for deep focus,
          group study rooms for collaborative sessions, and even cozy reading
          nooks with comfy chairs. I snagged a spot by a window overlooking the
          park—perfect for natural light and a quick mental break. The Wi-Fi was
          lightning-fast, no buffering on my research tabs, and outlets were
          plentiful. I set up my "command center" with books on urban planning
          (my major) spread out, and got to work.
        </p>

        <h3>The Perks: More Than Just Books</h3>
        <p>
          What really blew me away was the resources. Endless shelves of books,
          journals, and digital archives—everything from classics to
          cutting-edge e-books. I even used their online catalog to reserve
          items ahead of time. And the tech? Scanners, printers, and even a
          makerspace with 3D printers for those creative projects. Lunch break
          was a highlight: the library's cafe had affordable sandwiches and
          salads, so I didn't have to venture out into the chaos of the city
          streets.
        </p>
        <p>
          But it's not all work and no play. I took a 10-minute stroll through
          the art exhibit on the ground floor—free inspiration for my
          stressed-out brain. The library hosts events too, like workshops and
          author talks, which I noted for future visits.
        </p>

        <h3>The Challenges: Real Talk</h3>
        <p>
          Of course, it wasn't perfect. The place got busier as the day went on,
          with more people chatting in the common areas (despite the "quiet
          please" signs). Finding a parking spot nearby was a nightmare—public
          transport is your best bet. And let's be honest, staring at screens
          all day gave me a headache, so I switched to paper notes halfway
          through.
        </p>

        <h3>Wrapping It Up: Would I Go Back?</h3>
        <p>
          Absolutely, in a heartbeat. By 5 PM, I'd powered through two chapters,
          outlined my essay, and even brainstormed ideas for a group project.
          The Central Library isn't just a place to study; it's a community hub
          that fuels productivity and creativity. If you're a student like me,
          give it a shot—it's worth the trip. What's your go-to study spot? Drop
          a comment below!
        </p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Admission */}
          <div className={styles.section}>
            <h2>📌 Admission</h2>
            <p>
              Admissions are open for the academic year 2025–26. Scholarships
              available based on merit and entrance examination.
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
            <h2>📚 Central Library of University</h2>

            <div className={styles.libraryContent}>
              <div className={styles.libraryText}>
                <p>
                  The Central Library is a hub of academic excellence and
                  research, providing students and scholars access to vast
                  knowledge resources in a peaceful environment.
                </p>

                <p>
                  It includes textbooks, reference books, national and
                  international journals, e-resources, and digital databases.
                </p>

                <ul>
                  <li>📖 50,000+ Books</li>
                  <li>💻 Digital Library</li>
                  <li>🪑 Spacious Reading Halls</li>
                  <li>📡 Wi-Fi Enabled</li>
                  <li>🎓 Research Support</li>
                </ul>
              </div>

              <div className={styles.libraryImages}>
                <Image
                  src="/library3.jpg"
                  alt="Library"
                  width={450}
                  height={280}
                  className={styles.libraryImage}
                />
                <Image
                  src="/library2.jpg"
                  alt="Reading Hall"
                  width={450}
                  height={280}
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

      {/* Floating Speech */}
</div>
  );
};

export default CollegePage;
