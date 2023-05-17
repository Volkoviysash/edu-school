import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Test from "./testimonal/test";
import HBlog from "./HBlog";
import { HPrice } from "./HPrice";

function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <HBlog />
      <HPrice />
    </>
  );
}

export default Home;
