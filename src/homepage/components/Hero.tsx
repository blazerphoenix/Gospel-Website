// src/homepage/components/Hero.tsx
import React from "react";
import backgroundVideo from "../../assets/videos/hero.mp4";
import "./hero.css";

const Hero: React.FC = () => (
  <section className="hero">
    <video className="hero-video" autoPlay loop muted playsInline>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div className="hero-overlay" />

    <div className="hero-text">
      <span className="hero-cursive">Welcome To</span>
      <span className="hero-sans">DOOR OF DELIVERANCE MINISTRIES</span>
    </div>
  </section>
);

export default Hero;
