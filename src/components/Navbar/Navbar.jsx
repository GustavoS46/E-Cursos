import React, { useState } from 'react';
import { NavbarMenu } from '../../mockData/data';
import { MdMenu } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <FaGraduationCap className="text-4xl text-secondary" />
              <Link to="home" >
                E-Cursos
              </Link>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden lg:flex items-center gap-6 tracking-tighter">
            <ul className="flex items-center gap-6 tracking-tighter">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-500 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button Section */}
            <div className="space-x-6">
              <button className="font-semibold tracking-tighter">Entrar</button>
              <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 tracking-tighter">
                Registrar
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
