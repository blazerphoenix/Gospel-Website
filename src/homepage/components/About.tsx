// src/homepage/components/About.tsx
import React from "react";
import "./About.css"; // Updated CSS
import image1 from "../../assets/images/About.jpg"; // Import your images
import image2 from "../../assets/images/preach.png";

const About: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#111",
    overflow: "hidden",
    padding: "6rem 1rem",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95))",
    zIndex: 0,
  };

  const orbStyle: React.CSSProperties = {
    position: "absolute",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "radial-gradient(circle at center, rgba(100,100,120,0.3), transparent)",
    top: "-150px",
    right: "-200px",
    filter: "blur(120px)",
    animation: "float 8s ease-in-out infinite",
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    animation: "fadeIn 1.5s ease-out both",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Cinzel', serif",
    fontSize: "4rem",
    lineHeight: 1.1,
    letterSpacing: "0.1em",
    color: "#fff",
    margin: "0 0 1rem",
    textTransform: "uppercase",
  };

  const dividerStyle: React.CSSProperties = {
    width: "60px",
    height: "3px",
    backgroundColor: "#d4af37", // Gold color
    margin: "1rem auto 2rem",
    borderRadius: "999px",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    lineHeight: 1.7,
    color: "#ccc",
    marginBottom: "3rem",
  };

  const imagesWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  };

  const imageCardStyle: React.CSSProperties = {
    position: "relative",
    width: "380px",
    height: "250px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
    cursor: "pointer",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  return (
    <section id="about" style={sectionStyle}>
      {/* Overlays */}
      <div style={overlayStyle} />
      <div style={orbStyle} />

      {/* Main Content */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <div style={dividerStyle} />
        <p style={textStyle}>
        Door of Deliverance Ministries, is a Christ-centered organization committed to spreading the message of love, hope, and transformation. Located in the heart of Mudichur, Chennai, we are dedicated to empowering individuals through spiritual growth, compassionate outreach, and impactful welfare programs. Our mission is to uplift communities, with a special focus on women, by offering practical support, guidance, and a safe space for personal healing and development. Through regular prayer meetings, worship nights, and community events, we aim to nurture faith and inspire a life of purpose and service. Join us as we walk together on a journey of faith, restoration, and divine purpose.
        </p>

        {/* Image Gallery */}
        <div style={imagesWrapperStyle}>
          <div className="about-image" style={imageCardStyle}>
            <img src={image1} alt="About 1" style={imageStyle} />
          </div>
          <div className="about-image" style={imageCardStyle}>
            <img src={image2} alt="About 2" style={imageStyle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
