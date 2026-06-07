import Image from "next/image";
import styles from "./cardCod.module.css"; // Ensure correct relative path
import Link from "next/link";

const CardCod = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/economics.png"alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>Education</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>School of Economic </h1>
        </Link>

        <p className={styles.desc}>
          Empowering students with knowledge, skills, and opportunities for a
            brighter future.
        </p>

        <Link href="/Coding" className={styles.link}>Read More</Link>



      </div>
    </div>
  );
};

export default CardCod;
