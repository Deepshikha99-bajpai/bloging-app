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
    programs: (
      <div className={styles.subSection}>
        <h3>🎓 Fashion Programs</h3>
        <p>
          Our programs are designed to blend creativity with industry expertise.
          Students learn through studio-based projects, internships, and
          international collaborations. Each program emphasizes innovation,
          sustainability, and global exposure.
        </p>
        <ul>
          <li>B.Des in Fashion Design & Styling – foundation in design thinking and garment creation.</li>
          <li>B.Des in Textile & Apparel Innovation – focus on sustainable fabrics and smart textiles.</li>
          <li>M.Des in Digital Fashion & Technology – explore 3D design, AR/VR fashion, and AI-driven couture.</li>
          <li>MBA in Luxury Brand & Fashion Management – leadership in global fashion business.</li>
          <li>Diploma in Fashion Photography & Styling – creative direction and editorial styling.</li>
          <li>Certificate in Sustainable Fashion Practices – eco-conscious design for the future.</li>
        </ul>
      </div>
    ),
    facilities: (
      <div className={styles.subSection}>
        <h3>✨ World-Class Facilities</h3>
        <p>
          Our campus offers cutting-edge labs and studios where students can
          experiment, innovate, and bring their ideas to life. Facilities are
          designed to replicate real-world fashion industry environments.
        </p>
        <ul>
          <li>👗 Advanced Fashion Design Studios with mannequins, sewing machines, and creative workspaces.</li>
          <li>🧵 Textile & Garment Construction Labs for fabric testing and garment prototyping.</li>
          <li>💻 CAD & Digital Fashion Labs equipped with Adobe Suite, CLO3D, and AI tools.</li>
          <li>🎬 Fashion Photography & Styling Studio with professional lighting and equipment.</li>
          <li>🌍 International Exchange Programs and Industry Internships with leading fashion houses.</li>
        </ul>
      </div>
    ),
    careers: (
      <div className={styles.subSection}>
        <h3>💼 Career Opportunities</h3>
        <p>
          Our graduates are recruited by top fashion houses, luxury brands, and
          creative agencies worldwide. Many alumni also launch their own
          successful labels and startups in fashion technology.
        </p>
        <ul>
          <li>Fashion Designer / Creative Director – leading design teams and collections.</li>
          <li>Textile Innovator – developing sustainable and smart fabrics.</li>
          <li>Luxury Brand Manager – managing global fashion and lifestyle brands.</li>
          <li>Fashion Photographer & Stylist – editorial shoots, campaigns, and runway coverage.</li>
          <li>Sustainable Fashion Consultant – advising brands on eco-friendly practices.</li>
        </ul>
      </div>
    ),
    blog: (
      <div className={styles.subSection}>
        <h3>📝 Fashion Blog</h3>
        <p>
          Fashion is a reflection of identity, culture, and innovation. Our blog
          highlights student projects, industry insights, and global trends.
          From streetwear to haute couture, discover how fashion is evolving in
          the digital age.
        </p>
        <p>
          Recently, I attended the <strong>Digital Fashion Innovation Program</strong> showcase,
          where students presented AI-generated couture designs and VR-based
          fashion experiences. The event demonstrated how technology is merging
          with creativity to redefine the future of fashion education.
        </p>
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
          <h1>School of Fashion & Design</h1>
          <p>
            Inspiring creativity with cutting-edge fashion education, global
            exposure, and industry collaborations.
          </p>
        </div>

        <div className={styles.user}>
          <Image
            src="/ims2.png"
            alt="IMS Logo"
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>School of IIMS</span>
            <span className={styles.date}>Established 1987</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/ims1.png"
          alt="Fashion Campus"
          width={1200}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.post}>
          {/* Admission Section */}
          <div className={styles.section}>
            <h2>🎓 Admission</h2>
            <p>
              Admissions are open for the academic year 2025–26. Our programs
              emphasize studio-based learning, internships, and portfolio
              development for careers in fashion design, styling, and luxury
              management.
            </p>
          </div>

          {/* Explore Section */}
          <div className={styles.section}>
            <h2>Explore Our School</h2>
            <div className={styles.exploreList}>
              <h3 onClick={() => handleToggle("programs")}>👗 Programs</h3>
              <h3 onClick={() => handleToggle("facilities")}>🏛 Facilities</h3>
              <h3 onClick={() => handleToggle("careers")}>💼 Careers</h3>
              <h3 onClick={() => handleToggle("blog")}>📝 Blog</h3>
            </div>

            {activeSection && (
              <div className={styles.sectionContent}>
                {sections[activeSection]}
              </div>
            )}
          </div>

          {/* Feedback Section */}
          <div className={styles.comment}>
            <h2>💬 Student Feedback</h2>
            <Comments />

            <div className={styles.feedbackInput}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience..."
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

      {/* Floating Single Speech Button */}
</div>
  );
};

export default CollegePage;