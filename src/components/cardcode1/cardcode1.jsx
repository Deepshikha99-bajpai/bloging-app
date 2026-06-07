import Image from "next/image";
import styles from "./cardcode1.module.css"; // Ensure correct relative path
import Link from "next/link";

const Cardcode1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/code5.jpg"alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>culture</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>coding 1 </h1>
        </Link>

        <p className={styles.desc}>
            Learning is a journey, not a race.
            Every chapter teaches something new.
            Grow a little more every day.
            Your future begins with what you learn today.
        </p>

        <Link href="/code1" className={styles.link}>Read More</Link>

        
        
      </div>
    </div>
  );
};

export default Cardcode1;
