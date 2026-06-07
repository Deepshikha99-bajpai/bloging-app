import Image from "next/image";
import styles from "./cardcul3.module.css"; // Ensure correct relative path
import Link from "next/link";

const Card1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/davvcultural4.jpg"alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>Education</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>culture 3 </h1>
        </Link>

        <p className={styles.desc}>
            Learning is a journey, not a race.
            Every chapter teaches something new.
            Grow a little more every day.
            Your future begins with what you learn today.
        </p>

        <Link href="/dancecul" className={styles.link}>Read More</Link>

        
        
      </div>
    </div>
  );
};

export default Card1;
