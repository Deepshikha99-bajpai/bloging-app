
import styles from "./homepage.module.css";
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/Menu/Menu';
import PublishedPosts from '@/components/publishedPosts/PublishedPosts';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      <Featured />
      <CategoryList />
      <PublishedPosts />

      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
