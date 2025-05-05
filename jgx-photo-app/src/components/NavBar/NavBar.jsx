import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid/index.js";
import logo from '../../assets/img/logo_jg.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="bg-zinc-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <img
        className="object-cover object-center rounded w-10"
        alt="logo"
        src={logo}
    />
      <Link className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl" to={"/"}>
          JGx Agency | Growth Partner
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        {/* <a href="#projects" className="mr-5 hover:text-white">
          Trabajos anteriores
        </a> */}
        <Link to="/servicios" className="mr-5 hover:text-white">
          Servicios
        </Link>
        {/* <Link to={"/fotografia-profesional"} className="mr-5 hover:text-white">
          Fotografía profesional
        </Link> */}
        <Link to={"https://open.spotify.com/show/2N1bg2pyoacAZlBVZdTzRq?si=7376fcb3f5b74120"} className="mr-5 hover:text-white" target='_blank'>
          Podcast de Marketing Digital
        </Link>
      </nav>
      <Link
        to="/contacto"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        ¡Contrata nuestros Servicios!
      </Link>
        {/* <a
        href="https://shop.jgx.agency"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        target="_blank"  
        >
        ¡E-Shop! - Tienda Virtual
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a> */}
    </div>
  </header>
  )
}

export default NavBar
