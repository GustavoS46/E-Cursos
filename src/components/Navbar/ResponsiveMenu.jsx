import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  // Função para fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen z-50 overflow-y-auto lg:hidden"
        >
          <div className="text-md font-semibold uppercase text-white bg-secondary py-5 m-3 rounded-3xl border border-white">
            <ul className="flex flex-col justify-center items-center gap-4">
              <li className="tracking-tight">
                <Link to="home" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="tracking-tight">
                <Link to="estudantes" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Estudantes
                </Link>
              </li>
              <li className="tracking-tight">
                <Link to="sobre" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Sobre
                </Link>
              </li>
              <li className="tracking-tight">
                <Link to="servicos" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Serviços
                </Link>
              </li>
              <li className="tracking-tight">
                <Link to="contato" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                  Contacte-nos
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
