import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Events />
  </>
);

export default HomePage;
