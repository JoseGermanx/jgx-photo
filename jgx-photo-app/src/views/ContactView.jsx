import React from "react";
import Contact from "../components/Contact/Contact";
import usePageSEO from "../hooks/usePageSEO";

export default function ContactView() {
  usePageSEO({
    title: "Contacto -Hablemos de tu proyecto",
    description:
      "Página de contacto de agencia digital especializada en marketing digital y SEO.",
    keywords: ["Marketing", "SEO", "Contacto"],
    ogTitle: "Contacto - Marketing Digital y SEO",
    ogDescription: "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
    ogImage: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727211451/Purple_Black_Modern_Marketing_Plan_Presentation_eabtxb.png",
    ogUrl: "https://www.jgx.agency/",
  });
  return (
    <>
      <Contact />
    </>
  );
}
