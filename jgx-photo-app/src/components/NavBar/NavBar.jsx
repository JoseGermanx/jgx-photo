import React, { useState } from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid/index.js";
import logo from '../../assets/img/logo_jg.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-zinc-800 text-white md:sticky top-0 z-10"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className='flex' onMouseOver={() => setDropdownOpen(false)}>
        <img
          className="object-cover object-center rounded w-10"
          alt="logo"
          src={logo}
        />
        <Link className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl" to={"/"}>
          SEO y Marketing Digital en Chile
        </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <Link to="/servicios" className="mr-5 hover:text-white">
              Servicios
            </Link>
            {dropdownOpen && (
              <div
              className="absolute bg-zinc-700 text-white rounded shadow-lg mt-2 w-48"
                onMouseOver={() => setDropdownOpen(true)}
                onMouseOut={() => setDropdownOpen(false)}
              >
                <ul className="py-2">
                  <li>
                    <Link to="/servicios/seo" className="block px-4 py-2 hover:bg-zinc-600">
                      SEO
                    </Link>
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
        </nav>
        <Link
          to="/contacto"
          className="inline-flex items-center bg-blue-700 text-white border-0 p-2 focus:outline-none hover:bg-blue-900 rounded text-xl mt-4 md:mt-0">
          ¡Hablemos!
        </Link>
      </div>
    </header>
  );
};

export default NavBar;