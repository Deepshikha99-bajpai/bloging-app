"use client";

import Image from "next/image";
import styles from "./contactPage.module.css";
import { useState } from "react";
import "react-quill-new/dist/quill.bubble.css";
import ReactQuill from "react-quill-new";
import { htmlToPlainText } from "@/context/SpeechContentContext";
import { useSyncSpeechContent } from "@/hooks/useSyncSpeechContent";

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const speechText = [
    name.trim() && `Message from ${name.trim()}`,
    email.trim() && `Email ${email.trim()}`,
    phone.trim() && `Phone ${phone.trim()}`,
    htmlToPlainText(value),
  ]
    .filter(Boolean)
    .join(". ");

  useSyncSpeechContent(speechText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !htmlToPlainText(value)) {
      return;
    }
    setSent(true);
  };

  return (
    <div className={styles.container}>
      <p className="page-eyebrow">Get in touch</p>
      <h1 className={styles.heading}>Contact us</h1>
      <p className={styles.subheading}>
        Send a message to the DAVV Blog team. We read every submission.
      </p>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Full name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone number (optional)"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.editor}>
          <button className={styles.button} type="button" onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="Add attachment" width={16} height={16} />
          </button>

          {open && (
            <div className={styles.add}>
              <button className={styles.addButton} type="button">
                <Image src="/image.png" alt="" width={18} height={18} />
              </button>
              <button className={styles.addButton} type="button">
                <Image src="/video.png" alt="" width={18} height={18} />
              </button>
              <button className={styles.addButton} type="button">
                <Image src="/external.png" alt="" width={18} height={18} />
              </button>
            </div>
          )}

          <div className={styles.editorSurface}>
            <ReactQuill
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Write your message…"
            />
          </div>
        </div>

        <button className={styles.publish} type="submit">
          {sent ? "Message sent ✓" : "Send message"}
        </button>
      </form>

      <div className={`${styles.infoBox} ${styles.infoColored}`}>
        <h2>Our contact information</h2>
        <p>📍 Indore, Madhya Pradesh, India</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 support@davvblog.edu</p>
        <div className={styles.socialIcons}>
          <Image src="/facebook.png" width={30} height={30} alt="Facebook" />
          <Image src="/instagram.png" width={30} height={30} alt="Instagram" />
          <Image src="/twitter.png" width={30} height={30} alt="Twitter" />
          <Image src="/linkedin.png" width={30} height={30} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
