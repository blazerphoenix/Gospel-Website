import React, { useEffect, useState } from 'react';

const LatestYouTubeVideo: React.FC = () => {
  const [video, setVideo] = useState<{
    title: string;
    thumbnail: string;
    videoId: string;
  } | null>(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const API_KEY = 'AIzaSyCWXgthDnO39ov-QXFi27H6_ejblsrrdm8';
        const UPLOADS_PLAYLIST_ID = 'UUD8wwN9xlWytD27emCNAqjA';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=1&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          const latest = data.items[0].snippet;
          setVideo({
            title: latest.title,
            thumbnail: latest.thumbnails.high.url,
            videoId: latest.resourceId.videoId,
          });
        }
      } catch (error) {
        console.error('Error fetching the latest video:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h2>{video.title}</h2>
      <a
        href={`https://www.youtube.com/watch?v=${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={video.thumbnail} alt={video.title} />
      </a>
    </div>
  );
};

export default LatestYouTubeVideo;
