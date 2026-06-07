import Image from "next/image";
import styles from "./card.module.css"; // Ensure correct relative path
import Link from "next/link";

const card2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/unnamed (2) (1).png" alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>Education</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>School of Electronics</h1>
        </Link>

        <p className={styles.desc}>
              Study with passion, not pressure.
              Let curiosity guide your steps.
              Every lesson shapes your destiny.
              Dream big, learn bigger.
        </p>

        <Link href="/soex" className={styles.link}>Read More</Link>

        
        
      </div>
    </div>
  );
};

export default card2;
