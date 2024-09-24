import React from "react";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      {/* <Projects /> */}
      <Testimonials />
      <Contact />
    </>
  );
}
