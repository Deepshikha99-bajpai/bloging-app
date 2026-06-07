import Image from "next/image";
import styles from "./cardfd2.module.css"; // Ensure correct relative path
import Link from "next/link";

const Cardfd2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/food2.jpg" alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>food</span>
        </div>

        <Link href="/food" >
          <h1 className={styles.title}>Delicious Food Option 2</h1>
        </Link>

        <p className={styles.desc}>
            Discover the culinary delights on campus. From local specialties to international cuisines, our food options cater to every palate.
        </p>

        <Link href="/food2" className={styles.link}>Read More</Link>



      </div>
    </div>
  );
};

export default Cardfd2













































;
