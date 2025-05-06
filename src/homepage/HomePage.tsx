import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import HomeDonate from "./components/HomeDonate";

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Events />
    <HomeDonate />
  </>
);

export default HomePage;
