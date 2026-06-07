"use client";

import Image from "next/image";
import styles from "./aboutPage.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p> 
});

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  // Rich text fields
  const [aboutText, setAboutText] = useState("");
  const [missionText, setMissionText] = useState("");
  const [teamText, setTeamText] = useState("");
  const [extraText, setExtraText] = useState("");

  // Image states
  const [mainImage, setMainImage] = useState(null);
  const [teamImage, setTeamImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // Convert Image to Preview URL
  const handleImage = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  const handleGallery = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setGalleryImages([...galleryImages, ...urls]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About Us</h2>

      {/* MAIN IMAGE */}
      <div className={styles.imageBox}>
        <h3 className={styles.title}>Main About Image</h3>

        <label className={styles.imageUpload}>
          <Image src="/image.png" width={22} height={22} alt="upload" />
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleImage(e, setMainImage)}
          />
        </label>

        {mainImage && (
          <div className={styles.preview}>
            <Image src={mainImage} width={300} height={200} alt="preview" />
          </div>
        )}
      </div>

      {/* ABOUT SECTION */}
      <div className={styles.editorBox}>
        <h3 className={styles.title}>Who We Are</h3>
        <ReactQuill
          theme="bubble"
          value={aboutText}
          onChange={setAboutText}
          className={styles.textArea}
          placeholder="Write about your company, blog or personal introduction..."
        />
      </div>

      {/* Expand More */}
      <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
        <Image src="/plus.png" alt="Add" width={18} height={18} />
        Add More Sections
      </button>

      {open && (
        <div className={styles.add}>

          {/* Mission & Vision */}
          <div className={styles.editorBox}>
            <h3 className={styles.title}>
              <Image src="/target.png" alt="" width={20} height={20} /> Mission & Vision
            </h3>
            <ReactQuill
              theme="bubble"
              value={missionText}
              onChange={setMissionText}
              className={styles.textArea}
              placeholder="Describe your goals, purpose, future aims..."
            />
          </div>

          {/* TEAM SECTION with IMAGE */}
          <div className={styles.editorBox}>
            <h3 className={styles.title}>
              <Image src="/team.png" width={20} height={20} alt="" /> Our Team
            </h3>

            <label className={styles.imageUpload}>
              <Image src="/image.png" width={20} height={20} alt="" />
              Upload Team Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleImage(e, setTeamImage)}
              />
            </label>

            {teamImage && (
              <div className={styles.previewSmall}>
                <Image src={teamImage} width={200} height={150} alt="team" />
              </div>
            )}

            <ReactQuill
              theme="bubble"
              value={teamText}
              onChange={setTeamText}
              className={styles.textArea}
              placeholder="Describe team members & roles..."
            />
          </div>

          {/* Extra Info */}
          <div className={styles.editorBox}>
            <h3 className={styles.title}>
              <Image src="/info.png" width={20} height={20} alt="" /> Additional Info
            </h3>
            <ReactQuill
              theme="bubble"
              value={extraText}
              onChange={setExtraText}
              className={styles.textArea}
              placeholder="Add achievements, services, history, purpose..."
            />
          </div>

          {/* GALLERY IMAGES */}
          <div className={styles.editorBox}>
            <h3 className={styles.title}>
              <Image src="/gallery.png" width={20} height={20} alt="gallery" /> Gallery
            </h3>

            <label className={styles.imageUpload}>
              <Image src="/image.png" width={20} height={20} alt="upload" />
              Upload Gallery Images
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={handleGallery}
              />
            </label>

            <div className={styles.galleryRow}>
              {galleryImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={120}
                  height={100}
                  alt="gallery-preview"
                  className={styles.galleryImage}
                />
              ))}
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className={styles.socialBox}>
            <h3 className={styles.title}>Follow Us</h3>

            <div className={styles.socialIcons}>
              <Image src="/facebook.png" width={26} height={26} alt="fb" />
              <Image src="/instagram.png" width={26} height={26} alt="insta" />
              <Image src="/youtube.png" width={26} height={26} alt="yt" />
              <Image src="/linkedin.png" width={26} height={26} alt="in" />
              <Image src="/twitter.png" width={26} height={26} alt="twitter" />
            </div>
          </div>
        </div>
      )}

      <button className={styles.publish}>Save About Page</button>
    </div>
  );
};

export default AboutPage;
