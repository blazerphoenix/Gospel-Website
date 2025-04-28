// src/homepage/components/Events.tsx
import React, { useEffect, useState } from 'react';
import './Events.css';

interface Video {
  url: string;
  thumbnail: string;
}

const Events: React.FC = () => {
  const [latestVideo, setLatestVideo] = useState<Video | null>(null);

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const res = await fetch('/api/latest-video');
        if (!res.ok) throw new Error('Network response was not ok');
        const data: Video = await res.json();
        setLatestVideo(data);
      } catch (err) {
        console.error('Error fetching latest video:', err);
      }
    }
    fetchLatestVideo();
  }, []);

  return (
    <section id="events" className="events-section">
      <div className="events-content">
        <p className="events-text">
          Check out our latest video where we dive into powerful messages of faith and encouragement.  
          Stay connected and be uplifted with inspiring teachings and impactful moments from our services.  
          Watch now and join us in experiencing God’s transformative power!
        </p>

        {latestVideo ? (
          <a
            href={latestVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="events-thumbnail-container"
          >
            <img
              src={latestVideo.thumbnail}
              alt="Latest Video Thumbnail"
              className="events-thumbnail"
            />
            <div className="events-overlay">
              <span className="events-play-icon">▶</span>
            </div>
          </a>
        ) : (
          <p className="events-loading">Loading latest video...</p>
        )}
      </div>
    </section>
  );
};

export default Events;
