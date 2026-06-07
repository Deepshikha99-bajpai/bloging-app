import React from 'react';
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>

        <Link href="/blog?cat=colleges" className={`${styles.category} ${styles.colleges}`}>
          <Image 
            src="/style.png"
            alt="college"
            width={32}
            height={32}
            className={styles.image}
          />
          UTD's
        </Link>

        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
          <Image 
            src="/fashion.png"
            alt="fashion"
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>

       <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image 
            src="/food.png"
            alt="food"
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>

        <Link href="/blog?cat=studyzone" className={`${styles.category} ${styles.studyzone}`}>
          <Image 
            src="/travel.png"
            alt="travel"
            width={32}
            height={32}
            className={styles.image}
          />
          study zones
        </Link>

        <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
          <Image 
            src="/culture.png"
            alt="culture"
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>

        <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
          <Image 
            src="/coding.png"
            alt="coding"
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>

      </div>
    </div>
  );
};

export default CategoryList;
