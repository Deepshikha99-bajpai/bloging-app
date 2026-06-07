# bloging-app

This is a Next.js blogging application created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Blog post management
- User authentication
- Comment system
- Responsive design

## Built With

- [Next.js](https://nextjs.org/)
- React
- CSS Modules
#gemini key - AIzaSyCAeK6Y-dx2rIQIYdk48vpalnlG2wO4ESw





/* General Container */
.container {
  position: relative;
  max-width: 100%; /* Changed from 1800px for better fit */
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  color: #333;
  line-height: 1.7;

  /* Background image logic */
  background-image: url("/fashion3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #ffe6f0; /* Fallback */
}

/* Dark Overlay for the whole container */
.container::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 0;
}

/* Ensure all content stays above the overlay */
.container > * {
  position: relative;
  z-index: 1;
}

/* Hero Banner */
.heroBanner {
  position: relative;
  min-height: 420px; /* Changed from fixed height to min-height */
  width: 100%;
  margin-bottom: 50px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  display: flex; /* Added flex to center text better */
  align-items: flex-end;
  padding: 40px;
  box-sizing: border-box;
}

.heroImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65);
  border-radius: 18px;
  z-index: -1;
}

.heroText {
  color: #fff;
  text-shadow: 0 4px 10px rgba(0,0,0,0.8);
  width: 100%;
}

.heroText h1 {
  font-size: clamp(2rem, 5vw, 3.5rem); /* Responsive font sizing */
  margin-bottom: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.2; /* Prevents vertical clipping */
}

.heroText p {
  font-size: 1.4rem;
  font-weight: 600;
}

/* Main Content Layout */
.content {
  display: flex;
  gap: 40px;
}

.post {
  flex: 3;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Section Cards */
.sectionCard {
  background: #fff; /* Changed to white for better readability over dark overlay */
  padding: 30px;
  margin-bottom: 45px;
  border-radius: 14px;
  border: 2px solid #ffb6c1;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sectionCard:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.2);
}

.sectionCard h2 {
  margin-bottom: 18px;
  font-size: 1.8rem;
  color: #222;
  font-weight: bold;
  border-left: 6px solid #ff4081;
  padding-left: 12px;
}

/* Subsections */
.subSection {
  margin-top: 20px;
}

.subSection h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #444;
  font-weight: bold;
}

.subSection p {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
  background: #fff8fb;
  padding: 14px;
  border-left: 4px solid #ff4081;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Button Group */
.buttonGroup {
  display: flex;
  gap: 18px;
}

.buttonGroup button {
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff4081, #ff77a9);
  color: #fff; /* Fixed color from #4ab7ee to white for contrast */
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.buttonGroup button:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* Gallery */
.gallery {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.galleryImage {
  border-radius: 14px;
  border: 3px solid #ff4081;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  width: calc(33.333% - 20px);
  aspect-ratio: 1 / 1; /* Keeps images square */
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.galleryImage:hover {
  transform: scale(1.07);
  box-shadow: 0 12px 28px rgba(0,0,0,0.25);
}

/* Feedback Section */
.feedbackInput textarea {
  width: 100%;
  min-height: 120px;
  padding: 14px;
  border-radius: 10px;
  border: 2px solid #ff77a9;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background: #fff;
  box-sizing: border-box;
}

.feedbackInput button {
  margin-top: 12px;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #4caf50, #6dd56d);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

/* Sidebar Cards */
.trendingCard, .featuredCard {
  background: #fff;
  padding: 22px;
  border-radius: 14px;
  border: 2px solid #ffb6c1;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
}

/* Floating Speech Button */
.speechFloating {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

/* Footer */
.footer {
  margin-top: 70px;
  padding: 22px;
  text-align: center;
  background: #222;
  color: #fff;
  border-radius: 14px 14px 0 0;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 992px) {
  .content {
    flex-direction: column;
  }
  .sidebar {
    flex-direction: column; /* Changed to column for cleaner mobile layout */
  }
  .galleryImage {
    width: calc(50% - 15px);
  }
}

@media (max-width: 600px) {
  .heroBanner {
    padding: 20px;
    min-height: 300px;
  }
  .heroText h1 {
    font-size: 1.8rem;
  }
  .galleryImage {
    width: 100%;
  }
}