import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: "Blog",
  description: "Browse DAVV Blog categories and stories.",
};

const BlogPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = parseInt(params.page, 10) || 1;
  const cat = params.cat || "all";

  return (
    <div className={styles.container}>
      <p className="page-eyebrow">Categories</p>
      <h1 className={styles.title}>{cat} blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
