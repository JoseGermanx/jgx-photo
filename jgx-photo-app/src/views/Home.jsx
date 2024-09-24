import React from "react";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import usePageSEO from "../hooks/usePageSEO";

export default function Home() {
  usePageSEO({
    title: "Marketing Digital y SEO - JGx Agency",
    description:
      "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
    keywords: ["Marketing", "SEO"],
    ogTitle: "Marketing Digital y SEO - JGx Agency",
    ogDescription: "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
    ogImage: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727211451/Purple_Black_Modern_Marketing_Plan_Presentation_eabtxb.png",
    ogUrl: "https://www.jgx.agency/",
  });
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
