import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpeg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/10">
        <div className="container py-12">
          {/* Centralizando todo o conteúdo */}
          <div className="grid md:grid-cols-2 gap-6 text-black text-center md:text-left">
            {/* Brand Info Section */}
            <div className="py-8 px-4 space-y-4 md:text-center">
              <div className="text-2xl flex justify-center items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p className="text-xl">E-Cursos</p>
              </div>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                accusamus nulla labore cumque id ipsum molestias architecto
                voluptatum saepe ab.
              </p>
              <div className="flex justify-center items-center gap-5 mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Footer Links Section */}
            <div className="py-8 px-4 md:text-center">
              <h1 className="text-xl font-bold mb-5">Menu</h1>
              <ul className="flex flex-col gap-3 items-center">
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary duration-200">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/85">
                {" "}
                &copy; 2024 Gustavo Silva. Todos os direitos reservados
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
