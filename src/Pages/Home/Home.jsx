import React from "react";

import Nav from "../../Components/Nav/Nav";
import Hero from "./Components/Hero";
import "../Home/Components/hero.css";
import About from "./Components/About";
import Service from "./Components/Service";
import Calltoaction from "./Components/Calltoaction";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Calltoaction />
    </div>
  );
};

export default Home;
