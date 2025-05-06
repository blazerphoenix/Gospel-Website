// src/homepage/components/Hero.tsx
import React from "react";
import backgroundVideo from "../../assets/videos/hero.mp4";
import "./hero.css"; // Import the CSS file

const Hero: React.FC = () => (
  <section className="hero">
    <video className="hero-video" autoPlay loop muted playsInline>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div className="hero-overlay" />

    <div className="hero-text">
      Welcome to <br /> Door of Deliverance Ministries
    </div>
  </section>
);

export default Hero;
