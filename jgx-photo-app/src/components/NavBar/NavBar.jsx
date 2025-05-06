import React, { useState } from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid/index.js";
import logo from '../../assets/img/logo_jg.png';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-zinc-800 text-white md:sticky top-0 z-10"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className='flex' onMouseOver={() => setDropdownOpen(false)}>
          <img
            className="object-cover object-center w-4"
            alt="logo"
            src={logo}
          />
          <Link className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl" to={"/"}>
            SEO y Marketing Digital en Chile
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center space-x-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-400">
                Servicios
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="/servicios/seo"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    SEO
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-400">
                Productos
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="https://www.chatsagents.online/"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    WhastApp Chat Agents
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </nav>
        <Link
          to="/contacto"
          className="inline-flex items-center bg-blue-700 text-white border-0 p-2 focus:outline-none hover:bg-blue-900 rounded text-xl mt-4 md:mt-0">
          ¡Hablemos!
        </Link>
        <WhatsAppIcon /> 
      </div>
    </header>
  );
};

export default NavBar;