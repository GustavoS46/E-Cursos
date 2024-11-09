import React from 'react';
import { motion } from 'framer-motion';

const NavbarBanner = () => {
    // Estado para controlar a exibição do banner
    const [isOpen, setIsOpen] = React.useState(true);

    // Função para alternar o estado isOpen
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        isOpen && (  // Condicional para exibir o banner
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-primary text-sm text-center font-semibold p-2 lg:block relative tracking-tighter max-w-screen-lg mx-auto"
            >
                <div className="flex justify-between items-center">
                    {/* Texto da mensagem */}
                    <div className="text-center lg:text-left">
                        Quer se especializar ou está buscando novas oportunidades?
                    </div>

                    {/* Contêiner para o link e o botão de fechar */}
                    <div className="flex items-center space-x-4">
                        {/* Link "Fale conosco" */}
                        <a href="" className="text-secondary">
                            Fale conosco
                        </a>

                        {/* Botão de fechar */}
                        <div
                            className="cursor-pointer"
                            onClick={handleClose}  // Alterna o estado isOpen
                        >
                            x
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    );
};

export default NavbarBanner;
