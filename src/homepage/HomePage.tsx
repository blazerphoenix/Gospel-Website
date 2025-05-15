import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Music from "./components/Music";
import HomeDonate from "./components/HomeDonate";
import Newsletter from "./components/Newsletter";
import ContactFooter from "./components/ContactFooter";

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Events />
    <Music />
    <HomeDonate />
    <Newsletter />
    <ContactFooter />
  </>
);

export default HomePage;
