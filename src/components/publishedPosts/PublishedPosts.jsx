"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./PublishedPosts.module.css";

const PublishedPosts = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    const storedPosts = window.localStorage.getItem("publishedPosts");
    if (!storedPosts) {
      setPosts([]);
      return;
    }

    try {
      setPosts(JSON.parse(storedPosts));
    } catch (error) {
      console.warn("Clearing invalid publishedPosts storage", error);
      window.localStorage.removeItem("publishedPosts");
      setPosts([]);
    }
  };

  useEffect(() => {
    loadPosts();

    const handlePostsUpdated = () => loadPosts();
    window.addEventListener("publishedPostsUpdated", handlePostsUpdated);
    window.addEventListener("storage", handlePostsUpdated);

    return () => {
      window.removeEventListener("publishedPostsUpdated", handlePostsUpdated);
      window.removeEventListener("storage", handlePostsUpdated);
    };
  }, []);

  const handleDelete = (postId) => {
    const nextPosts = posts.filter((post) => post.id !== postId);
    setPosts(nextPosts);
    window.localStorage.setItem("publishedPosts", JSON.stringify(nextPosts));
    window.dispatchEvent(new Event("publishedPostsUpdated"));
  };

  if (!posts.length) {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Published posts</h2>
        <p className={styles.emptyMessage}>
          No posts have been published yet. Create a new post from the Write page and it will appear here.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Published posts</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <span className={styles.cardDate}>
                  {new Date(post.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <button
                type="button"
                className={styles.deleteButton}
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
            <p className={styles.cardExcerpt}>
              {post.excerpt || "No preview text available."}
            </p>
            {post.images?.length > 0 && (
              <div className={styles.imageGrid}>
                {post.images.map((image) => (
                  <div key={image.url} className={styles.imageItem}>
                    <img src={image.url} alt={image.name} />
                  </div>
                ))}
              </div>
            )}
            {post.caption ? <p className={styles.caption}>{post.caption}</p> : null}
            <Link href={`/post/${post.id}`} className={styles.readMore}>
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PublishedPosts;
