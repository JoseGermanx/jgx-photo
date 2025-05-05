

import React from 'react'
import Skills from '../components/Skills/Skills'
import usePageSEO from '../hooks/usePageSEO';

export default function ServicesView() {
  usePageSEO({
    title: "Servicios - Marketing Digital y SEO",
    description:
      "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
    keywords: ["Marketing", "SEO"],
    ogTitle: "Servicios - Marketing Digital y SEO",
    ogDescription: "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
    ogImage: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727211451/Purple_Black_Modern_Marketing_Plan_Presentation_eabtxb.png",
    ogUrl: "https://www.jgx.agency/",
  });

  
  return (
    <>
    <Skills />
    </>
  )
}
