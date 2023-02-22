import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid/index.js";
import logo from '../../assets/img/logo_jg.png'

const NavBar = () => {
  return (
    <header className="bg-zinc-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <img
        className="object-cover object-center rounded w-10"
        alt="logo"
        src={logo}
    />
      <a className="title-font font-medium text-white mb-4 md:mb-0">
        <a href="#about" className="ml-3 text-xl">
          José G Martínez
        </a>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white">
          Trabajos anteriores
        </a>
        <a href="#skills" className="mr-5 hover:text-white">
          Servicios
        </a>
        <a href="#testimonials" className="mr-5 hover:text-white">
          Testimonios
        </a>
      </nav>
      <a
        href="#contact"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        ¡Contrátame!
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  </header>
  )
}

export default NavBar