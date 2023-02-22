import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <main className="text-gray-400 bg-black body-font p-0">
    <NavBar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
  )
}

export default App
