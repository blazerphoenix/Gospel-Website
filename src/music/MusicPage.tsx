// src/music/MusicPage.tsx
import React from "react";
import Navbar from "../homepage/components/Navbar";
import "./MusicPage.css";

const MusicPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="music-page">
        <h2 className="music-page-title">Our Worship Playlist</h2>
        <div className="music-page-divider" />
        <div className="music-page-video">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLOXIw82tS-WRPgfFLLUNq6QCqcqrJBbnW"
            title="Worship Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default MusicPage;
