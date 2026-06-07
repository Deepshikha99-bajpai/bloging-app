import Image from "next/image";
import styles from "./cardfd1.module.css"; // Ensure correct relative path
import Link from "next/link";

const Cardfd1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/food4.jpg" alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2026</span>
          <span className={styles.category}>food</span>
        </div>

        <Link href="/food" >
          <h1 className={styles.title}>Delicious Food Option 1</h1>
        </Link>

        <p className={styles.desc}>
            Explore the flavors of our campus food. Fresh ingredients and traditional recipes come together to create memorable meals.
        </p>

        <Link href="/food" className={styles.link}>Read More</Link>



      </div>
    </div>
  );
};

export default Cardfd1













































;
