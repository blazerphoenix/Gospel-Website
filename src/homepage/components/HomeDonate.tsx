import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeDonate.css";

const HomeDonate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home-donate">
      <div className="home-donate-overlay" />
      <div className="home-donate-orb" />
      <div className="home-donate-content">
        <h1 className="home-donate-title">Support Our Mission</h1>
        {/* <div className="home-donate-divider" /> */}
        <p className="home-donate-text">
          Your generous donations help us continue our mission of spreading faith, hope, and love to those in need. By partnering with us, you contribute to life-changing programs, outreach initiatives, and community support. Every gift, big or small, makes a significant impact. Together, we can reach more hearts and transform more lives. Donate today and be a part of God’s work through Door of Deliverance Ministries. Thank you for your support!
        </p>
        <button className="home-donate-button" onClick={() => navigate("/donate")}>
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default HomeDonate;
