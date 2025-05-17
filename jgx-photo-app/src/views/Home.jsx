import React from "react";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import usePageSEO from "../hooks/usePageSEO";
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


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

  useEffect(() => {
		createChat({
			webhookUrl: 'https://primary-production-8825.up.railway.app/webhook/0498abd7-9cec-4463-af42-5c0dd8e8beaf/chat',
      webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		'Hola! 👋',
		'Soy el chat de betacode. ¿Cómo te puedo ayudar hoy?'
	],
	i18n: {
		en: {
			title: 'SEO y Marketing Digital',
			subtitle: "Inicia el chat. Te responderé preguntas sobre nuestros servicios.",
			footer: '',
			getStarted: 'Nueva conversación',
			inputPlaceholder: 'Escribe tu consulta...',
		},
	},
		});
	}, []);
 

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
