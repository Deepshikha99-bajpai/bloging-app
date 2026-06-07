"use client";

import { useState, useEffect } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const CollegeLibraryPage = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const mockBooks = [
    "Introduction to Computer Science",
    "Digital Electronics Handbook",
    "Modern Physics",
    "Library Management Systems",
  ];

  const filteredBooks = mockBooks.filter((book) =>
    book.toLowerCase().includes(search.toLowerCase())
  );

  const announcements = [
    "Library will remain open till 10 PM during exams.",
    "Workshop on Research Methodology next Friday.",
    "New e-resources added for Data Science students.",
  ];

  const events = [
    { title: "Research Paper Writing", date: "Jan 15, 2026" },
    { title: "Digital Library Orientation", date: "Jan 20, 2026" },
    { title: "AI in Education Seminar", date: "Feb 5, 2026" },
  ];

  const categories = ["Science", "Technology", "Arts", "Commerce", "Law"];

  const faqs = [
    { q: "How many books can I issue?", a: "You can issue up to 3 books at a time." },
    { q: "What is the fine for late return?", a: "₹5 per day per book." },
    { q: "Can I access e-resources from home?", a: "Yes, using your student login credentials." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      {/* HEADER */}
      <header className={styles.infoContainer}>
        <div>
          <h1 className={styles.fadeIn}>📚 College Central Library</h1>
          <p>Empowering learning with books, journals, and digital knowledge resources.</p>
        </div>

        <div className={styles.user}>
          <Image src="/davvLib2.jpg" alt="Logo" width={70} height={70} />
          <div>
            <span className={styles.username}>School of Library Science</span>
            <span className={styles.date}>Established 1987</span>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className={styles.toggleBtn}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* HERO with text overlay */}
      <section className={styles.heroImage}>
        <Image
          src="/library1.png"
          alt="Library"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroText}>
          <h2>Welcome to the College Central Library</h2>
          <p>Explore knowledge, research, and innovation under one roof.</p>
        </div>
      </section>

      <main className={styles.content}>
        <section className={styles.post}>
          {/* ABOUT */}
          <div className={styles.section}>
            <h2>🏛️ About Library</h2>
            <p>
              The Central Library provides academic support with modern
              infrastructure, digital resources, and a peaceful environment.
            </p>
          </div>

          {/* STATS */}
          <div className={`${styles.stats} ${styles.fadeIn}`}>
            <div className={styles.card}>📘 50,000+ Books</div>
            <div className={styles.card}>📰 120+ Journals</div>
            <div className={styles.card}>💺 300 Seats</div>
            <div className={styles.card}>👩‍🎓 5,000 Users</div>
          </div>

          {/* SEARCH */}
          <div className={styles.section}>
            <h2>🔍 Search Books</h2>
            <input
              className={styles.search}
              type="text"
              placeholder="Search by title, author or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <ul className={styles.searchResults}>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book, idx) => (
                    <li key={idx}>{book}</li>
                  ))
                ) : (
                  <li>No results found</li>
                )}
              </ul>
            )}
          </div>

          {/* CATEGORIES */}
          <div className={styles.section}>
            <h2>📂 Book Categories</h2>
            <div className={styles.categories}>
              {categories.map((cat, idx) => (
                <span key={idx} className={styles.category}>{cat}</span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.section}>
            <h2>❓ FAQs</h2>
            {faqs.map((faq, idx) => (
              <details key={idx} className={styles.faq}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>

          {/* ANNOUNCEMENTS */}
          <div className={styles.section}>
            <h2>📢 Announcements</h2>
            <ul className={styles.announcements}>
              {announcements.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>

          {/* EVENTS */}
          <div className={styles.section}>
            <h2>🎉 Upcoming Events</h2>
            <ul className={styles.events}>
              {events.map((event, idx) => (
                <li key={idx}>
                  <strong>{event.title}</strong> - {event.date}
                </li>
              ))}
            </ul>
          </div>

          {/* GALLERY */}
          <div className={styles.section}>
            <h2>🖼️ Library Infrastructure</h2>
            <div className={styles.gallery}>
              <Image src="/library2.jpg" alt="Hall" width={420} height={280} />
              <Image src="/library3.jpg" alt="Digital" width={420} height={280} />
              <Image src="/davvLib.jpg" alt="Stacks" width={420} height={280} />
            </div>
          </div>

          {/* NOTICE */}
          <div className={styles.notice}>
            📢 New journals added for Computer Science & Electronics students.
          </div>

          {/* FEEDBACK */}
          <div className={styles.section}>
            <h2>💬 Student Feedback</h2>
            <Comments />
          </div>

          {/* CONTACT FORM */}
          <div className={styles.section}>
            <h2>📬 Contact Us</h2>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <Menu />
        </aside>
      </main>

      {/* SPEECH */}
{/* FOOTER */}
      <footer className={styles.footer}>
        <p>📍 College Campus, Indore</p>
        <p>📧 library@college.edu | ☎️ +91-9876543210</p>
        <div className={styles.socials}>
          <a href="#">🌐 Website</a>
          <a href="#">📘 Facebook</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScroll && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          ⬆️ Top
        </button>
      )}
    </div>
  );
};

export default CollegeLibraryPage;
