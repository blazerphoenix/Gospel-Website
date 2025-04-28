// src/homepage/components/Hero.tsx
import React from "react";
import backgroundVideo from "../../assets/videos/hero.mp4"; // make sure this matches your filename

const Hero: React.FC = () => (
  <section
    style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    {/* Background video covers only this section */}
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        inset: 0,            // shorthand for top:0; right:0; bottom:0; left:0
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </section>
);

export default Hero;
