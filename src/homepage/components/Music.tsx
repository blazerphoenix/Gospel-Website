// src/homepage/components/Music.tsx
import React from "react";
import "./Music.css";
import { Link } from "react-router-dom";

const Music: React.FC = () => {
  return (
    <section id="music" className="music-section">
      <div className="music-overlay" />
      <div className="music-orb" />

      <div className="music-content">
        <h2 className="music-title">OUR WORSHIP MUSIC</h2>
        {/* <div className="music-divider" /> */}
        <p className="music-description">
        Experience the heart of our ministry through music! Our songs are crafted to inspire, uplift, and draw you closer to God. Whether you're looking for worship tracks to deepen your faith or energetic tunes to celebrate His greatness, explore our music collection and let the melodies speak to your soul. Tune in and be blessed!
        </p><br></br>
        <Link to="/music" className="music-button">
          Watch Full Playlist
        </Link>
      </div>
    </section>
  );
};

export default Music;
