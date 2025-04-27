// src/homepage/components/Hero.tsx
import React from "react";
import backgroundVideo from "../../assets/videos/Hero.mp4";

const Hero: React.FC = () => (
  <div>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "fixed",       // <- FIXED, not absolute
        top: 0,
        left: 0,
        width: "100vw",          // <- cover full viewport
        height: "100vh",         // <- cover full viewport
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
);

export default Hero;
