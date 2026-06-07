"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import { useAuth } from "@/context/AuthContext";
import { htmlToPlainText } from "@/context/SpeechContentContext";
import { useSyncSpeechContent } from "@/hooks/useSyncSpeechContent";
import styles from "./writePage.module.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const WritePage = () => {
  const router = useRouter();
  const { isAuthenticated, authReady } = useAuth();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [saved, setSaved] = useState(false);
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [postCount, setPostCount] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const fileInput = useRef(null);

  const plainContent = useMemo(() => htmlToPlainText(value), [value]);
  const wordCount = useMemo(
    () => (plainContent ? plainContent.split(/\s+/).filter(Boolean).length : 0),
    [plainContent]
  );
  const charCount = plainContent.length;
  const hasDraft = Boolean(title.trim() || plainContent || caption.trim());

  const speechText = [title.trim(), plainContent, caption.trim()].filter(Boolean).join(". ");
  useSyncSpeechContent(speechText);

  useEffect(() => {
    if (!authReady) return;
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [authReady, isAuthenticated, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPosts = window.localStorage.getItem("publishedPosts");
      setPostCount(storedPosts ? JSON.parse(storedPosts).length : 0);
    }
  }, []);

  const addBlogFormat = () => {
    const format = `
      <h1>Introduction</h1>
      <p>Write your introduction here. Hook the reader and introduce your topic.</p>
      <h2>Main section</h2>
      <p>Add your main content, examples, and key points here.</p>
      <h3>Details</h3>
      <p>Elaborate on a specific idea or story.</p>
      <h2>Conclusion</h2>
      <p>Summarize your post and end with a clear takeaway.</p>
    `;
    setValue(format);
    setSaved(false);
  };

  const handlePublish = async () => {
    if (!title.trim() || !plainContent) {
      setError("Please add a title and some content before publishing.");
      setSaved(false);
      return;
    }

    setIsPublishing(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 350));

    const newPost = {
      id: Date.now().toString(),
      title: title.trim(),
      content: value,
      caption: caption.trim(),
      images,
      createdAt: new Date().toISOString(),
      excerpt: plainContent.slice(0, 180),
    };

    const getStoredPosts = () => {
      if (typeof window === "undefined") return [];
      const stored = window.localStorage.getItem("publishedPosts");
      if (!stored) return [];
      try {
        return JSON.parse(stored);
      } catch (err) {
        console.warn("Resetting invalid publishedPosts storage", err);
        return [];
      }
    };

    const updatedPosts = [newPost, ...getStoredPosts()];
    window.localStorage.setItem("publishedPosts", JSON.stringify(updatedPosts));
    window.dispatchEvent(new Event("publishedPostsUpdated"));
    setPostCount(updatedPosts.length);
    setSaved(true);
    setTitle("");
    setValue("");
    setCaption("");
    setImages([]);
    setIsPublishing(false);
  };

  const handleFiles = async (event) => {
    const selectedFiles = Array.from(event.target.files || []).filter((file) =>
      file.type.startsWith("image/")
    );
    if (!selectedFiles.length) {
      setError("Please select one or more image files.");
      return;
    }

    const loadedImages = await Promise.all(
      selectedFiles.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ name: file.name, url: reader.result });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );

    setImages((prev) => [...prev, ...loadedImages]);
    setError("");
    setSaved(false);
  };

  const openFileDialog = () => {
    fileInput.current?.click();
  };

  if (!authReady) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Loading editor...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarText}>
          <p className={styles.label}>Blog editor</p>
          <h1 className={styles.pageTitle}>Create your post</h1>
          <p className={styles.subtitle}>Write, preview, and publish — your draft updates live as you type.</p>
          <span className={`${styles.statusBadge} ${hasDraft ? styles.statusBadgeActive : ""}`}>
            <span className={styles.statusDot} />
            {hasDraft ? "Draft in progress" : "Start writing"}
          </span>
        </div>
        <button
          type="button"
          className={styles.publish}
          onClick={handlePublish}
          disabled={isPublishing}
        >
          {isPublishing ? "Publishing…" : "Publish post"}
        </button>
      </div>

      <div className={styles.writeGrid}>
        <div className={styles.editorPane}>
          <div className={styles.editorCard}>
            <label className={styles.label} htmlFor="post-title">
              Post title
            </label>
            <textarea
              id="post-title"
              placeholder="Give your post a catchy title…"
              className={styles.input}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSaved(false);
              }}
              rows={2}
            />

            <div className={styles.statsRow}>
              <span className={styles.statChip}>{wordCount} words</span>
              <span className={styles.statChip}>{charCount} characters</span>
              <span className={styles.statChip}>~{Math.max(1, Math.ceil(wordCount / 200))} min read</span>
            </div>

            <div className={styles.toolbarRow}>
              <div className={styles.inlineButtons}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => setOpen(!open)}
                  aria-label="Add media"
                >
                  <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                  <div className={styles.add}>
                    <button className={styles.addButton} type="button">
                      <label htmlFor="image-upload">
                        <Image src="/image.png" alt="Upload image" width={16} height={16} />
                      </label>
                    </button>
                    <button className={styles.addButton} type="button" aria-label="Add link">
                      <Image src="/external.png" alt="" width={16} height={16} />
                    </button>
                    <button className={styles.addButton} type="button" aria-label="Add video">
                      <Image src="/video.png" alt="" width={16} height={16} />
                    </button>
                  </div>
                )}
              </div>
              <button className={styles.formatButton} type="button" onClick={addBlogFormat}>
                + Blog template
              </button>
            </div>

            <div className={styles.editorSurface}>
              <ReactQuill
                theme="bubble"
                value={value}
                onChange={(content) => {
                  setValue(content);
                  setSaved(false);
                }}
                placeholder="Tell your story…"
              />
            </div>
          </div>

          <div className={styles.uploadSection}>
            <div className={styles.uploadTopRow}>
              <div>
                <p className={styles.uploadSectionTitle}>Images & caption</p>
                <p className={styles.uploadDescription}>Optional photos and a short note for your post.</p>
              </div>
              <button className={styles.selectButton} type="button" onClick={openFileDialog}>
                Select images
              </button>
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              ref={fileInput}
              onChange={handleFiles}
              className={styles.hiddenInput}
            />
            <textarea
              placeholder="Add an image caption or note…"
              className={styles.captionInput}
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
                setSaved(false);
              }}
              rows={3}
            />
            <p className={styles.uploadHint}>Images appear in your post preview and on the homepage after publishing.</p>
            {images.length > 0 && (
              <div className={styles.previewImages}>
                {images.map((img) => (
                  <div key={img.url} className={styles.imageCard}>
                    <img src={img.url} alt={img.name} className={styles.previewImage} />
                    <p className={styles.imageName}>{img.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && <p className={styles.error}>{error}</p>}
          {saved && (
            <p className={styles.success}>
              Published! Your post is now on the homepage.{" "}
              <Link href="/">View homepage →</Link>
            </p>
          )}
        </div>

        <aside className={styles.previewPane}>
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <p className={styles.label}>Live preview</p>
              <span className={styles.postCount}>{postCount} published</span>
            </div>
            <p className={styles.previewText}>
              This panel updates as you type so you can see how your post will look.
            </p>
            {hasDraft ? (
              <div className={styles.livePreview}>
                <p className={styles.livePreviewLabel}>Draft preview</p>
                <h3 className={styles.previewTitle}>{title.trim() || "Untitled post"}</h3>
                {caption.trim() ? <p className={styles.previewCaption}>{caption}</p> : null}
                <div
                  className={styles.previewBody}
                  dangerouslySetInnerHTML={{
                    __html: value || "<p>Your content will appear here…</p>",
                  }}
                />
              </div>
            ) : (
              <div className={styles.emptyPreview}>
                Start typing a title and body to see your live preview here.
              </div>
            )}
          </div>
        </aside>
      </div>

      <div className={styles.stickyBar}>
        <span className={styles.stickyHint}>{wordCount} words · {hasDraft ? "Ready to publish?" : "Add content"}</span>
        <button
          type="button"
          className={styles.publish}
          onClick={handlePublish}
          disabled={isPublishing}
        >
          {isPublishing ? "Publishing…" : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default WritePage;
