import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./hero/HAbout";
import Test from "./testimonal/test";

function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
    </>
  );
}

export default Home;
