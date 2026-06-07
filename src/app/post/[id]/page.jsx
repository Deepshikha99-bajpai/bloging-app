"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./postPage.module.css";

const PostPage = ({ params }) => {
  const { id } = use(params);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedPosts = window.localStorage.getItem("publishedPosts");
    if (!storedPosts) {
      setLoading(false);
      return;
    }

    try {
      const posts = JSON.parse(storedPosts);
      const foundPost = posts.find((item) => item.id === id);
      setPost(foundPost || null);
    } catch (error) {
      console.warn("Unable to load published post", error);
      setPost(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <article className={styles.container}>
        <div className={styles.card}>
          <p className={styles.message}>Loading post…</p>
        </div>
      </article>
    );
  }

  if (!post) {
    return (
      <article className={styles.container}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Post</p>
          <h1 className={styles.title}>Post not found</h1>
          <p className={styles.message}>
            This post may have been deleted or the link is incorrect.
          </p>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>
          <time className={styles.date} dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        <p className={styles.eyebrow}>Published article</p>
        <h1 className={styles.title}>{post.title}</h1>
        {post.caption ? <p className={styles.caption}>{post.caption}</p> : null}

        {post.images?.length > 0 && (
          <div className={styles.imageGrid}>
            {post.images.map((image) => (
              <figure key={image.url} className={styles.imageItem}>
                <img src={image.url} alt={image.name} className={styles.image} loading="lazy" />
              </figure>
            ))}
          </div>
        )}

        <div
          className={`prose ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};

export default PostPage;
