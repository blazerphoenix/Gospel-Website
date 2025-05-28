import React from "react";
import LatestYouTubeVideo from "./LatestYouTubeVideo";
import img1 from "../../assets/images/preach.png"; // Your fabric/canvas texture image

const Events: React.FC = () => {
  return (
    <section
      id="events"
      style={{
        ...styles.section,
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div style={styles.overlay} />
      <div style={{ ...styles.orb, ...styles.orb1 }} />
      <div style={{ ...styles.orb, ...styles.orb2 }} />
      <div style={styles.content} className="fade-in-up">
        <h1 style={styles.title}>Latest Events</h1>
        {/* <div style={styles.divider} /> */}
        <p style={styles.text}>
          Check out our latest video where we dive into powerful messages of
          faith and encouragement. Stay connected and be uplifted with inspiring
          teachings and impactful moments from our services. Watch now and join
          us in experiencing God’s transformative power!
        </p>
        <LatestYouTubeVideo />
      </div>

      <style>
        {`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
        }
      `}
      </style>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    padding: "6rem 1rem",
    backgroundAttachment: "fixed",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(41, 42, 42, 0.85), rgba(0,0,0,0.95))",
    zIndex: 0,
  },
  // orb: {
  //   position: "absolute",
  //   borderRadius: "50%",
  //   background: "radial-gradient(circle at center, rgba(254, 254, 254, 0.2), transparent)",
  //   filter: "blur(120px)",
  //   animation: "float 10s ease-in-out infinite",
  //   zIndex: 1,
  // },
  // orb1: {
  //   width: 500,
  //   height: 500,
  //   top: "-150px",
  //   left: "-200px",
  // },
  // orb2: {
  //   width: 400,
  //   height: 400,
  //   bottom: "-100px",
  //   right: "-150px",
  //   animationDelay: "2s",
  // },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    padding: "1rem",
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: "3rem",
    lineHeight: 1.1,
    letterSpacing: "0.1em",
    color: "#fff",
    margin: "0 0 1rem",
    textTransform: "uppercase",
  },
  divider: {
    width: "60px",
    height: "3px",
    backgroundColor: "#d4af37",
    margin: "1rem auto 2rem",
    borderRadius: "999px",
  },
  text: {
    fontSize: "1.25rem",
    lineHeight: 1.7,
    color: "white",
    marginBottom: "3rem",
  },
};

export default Events;
