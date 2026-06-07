"use client";

import { useEffect, useState } from "react";
import styles from "./ImageUpload.module.css";

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  const handleFiles = (event) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    if (!validFiles.length) {
      setError("Please select one or more image files.");
      return;
    }

    const previews = validFiles.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}`,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...previews]);
    setError("");
  };

  const handleClear = () => {
    images.forEach((image) => URL.revokeObjectURL(image.preview));
    setImages([]);
    setError("");
  };

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.controls}>
        <label htmlFor="image-upload" className={styles.uploadLabel}>
          Select images
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          className={styles.fileInput}
        />
        {images.length > 0 && (
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            Clear preview
          </button>
        )}
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      {images.length > 0 ? (
        <div className={styles.previewGrid}>
          {images.map((image) => (
            <div key={image.id} className={styles.previewCard}>
              <img src={image.preview} alt={image.name} className={styles.previewImage} />
              <p className={styles.previewName}>{image.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.hint}>
          Upload images to preview them instantly on the webpage.
        </p>
      )}
    </div>
  );
}
