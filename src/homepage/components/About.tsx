// src/homepage/components/About.tsx
import React from "react";
import "./About.css"; // we’ll put keyframes here

const About: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#111",  // fallback
    overflow: "hidden",
    padding: "4rem 1rem",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))",
    zIndex: 0,
  };

  const orbStyle: React.CSSProperties = {
    position: "absolute",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "radial-gradient(circle at center, rgba(100,100,120,0.4), transparent)",
    top: "-150px",
    right: "-200px",
    filter: "blur(100px)",
    animation: "float 8s ease-in-out infinite",
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    animation: "fadeIn 1.5s ease-out both",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Cinzel', serif",
    fontSize: "4rem",
    lineHeight: 1.1,
    letterSpacing: "0.1em",
    color: "#fff",
    margin: "0 0 1.5rem",
    textTransform: "uppercase",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    lineHeight: 1.6,
    color: "#ccc",
  };

  return (
    <section id="about" style={sectionStyle}>
      {/* Dark Gradient Overlay */}
      <div style={overlayStyle} />

      {/* Floating Orb */}
      <div style={orbStyle} />

      {/* Content */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <p style={textStyle}>
          Door of Deliverance Ministries is a Christ-centered community passionate about
          spreading the love, hope, and transformation found in Jesus. We believe in
          authentic worship, heartfelt community outreach, and empowering individuals to
          walk in divine purpose. Rooted in grace and driven by compassion, we are on a
          mission to see lives restored and faith ignited across our city and beyond.
        </p>
      </div>
    </section>
  );
};

export default About;
