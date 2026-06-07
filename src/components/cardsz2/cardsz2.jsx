import Image from "next/image";
import styles from "./cardsz2.module.css"; // Ensure correct relative path
import Link from "next/link";

const Cardsz2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/davvLib.jpg"alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>studyzone</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>welcome to the central library </h1>
        </Link>

        <p className={styles.desc}>
            Learning is a journey, not a race.
            Every chapter teaches something new.
            Grow a little more every day.
            Your future begins with what you learn today.
        </p>

        <Link href="/centrallib" className={styles.link}>Read More</Link>

        
        
      </div>
    </div>
  );
};

export default Cardsz2;
