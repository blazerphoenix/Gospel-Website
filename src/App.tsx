import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import MusicPage from "./music/MusicPage"; // ✅ Import the new page
import DonatePage from "./donate/Donate";
import ScrollToHash from "./ScrollToHash";

const App: React.FC = () => {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} /> {/* ✅ New route */}
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </>
  );
};

export default App;
