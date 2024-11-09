import React from 'react';
import { GrYoga } from 'react-icons/gr';
import { FaDumbbell } from 'react-icons/fa6';
import { GiGymBag } from 'react-icons/gi';
import { motion } from 'framer-motion';

// Dados para a seção
const WhyChooseData = [
  {
    id: 1,
    title: 'Ensino individual',
    desc: 'Todos os nossos especialistas em educação especial têm um diploma em educação especial',
    icon: <GrYoga />,
    bgColor: '#0063FF',
    delay: 0.3,
  },
  {
    id: 2,
    title: '24/7 Disponibilidade do tutor',
    desc: 'Nosso tutor está sempre disponível para responder o mais rápido possível para você',
    icon: <FaDumbbell />,
    bgColor: '#73BC00',
    delay: 0.3,
  },
  {
    id: 3,
    title: 'Quadro branco interativo',
    desc: 'Nosso sistema é equipado com recursos de chat de áudio e vídeo',
    icon: <GiGymBag />,
    bgColor: '#FA6400',
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Preços acessíveis',
    desc: 'Escolha um tutor especializado com base no seu orçamento e por hora',
    icon: <GiGymBag />,
    bgColor: '#FE6BAA',
    delay: 0.3,
  },
];

// Função para animação SlideLeft
export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { // Corrigido para 'transition'
        duration: 1,
        delay: delay,
      },
    },
  };
};

const WhyChooseUs = () => {
  return (
    <div id='servicos' className='bg-[#D6D6D6] overflow-hidden'>
      <div className='container py-24'>
        <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
          <h1 className='text-orange-400 uppercase font-semibold tracking-tight'>Por que nos escolher</h1>
          <p className='text-xl lg:text-2xl font-semibold tracking-tighter'>Benefícios dos serviços de tutoria online conosco</p>
        </div>
        
        {/* Cards section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {WhyChooseData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={SlideLeft(item.delay)}
              initial='hidden'
              whileInView='visible'
              className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]'
            >
              <div 
                style={{ backgroundColor: item.bgColor }}
                className='w-10 h-10 rounded-lg flex justify-center items-center text-white'
              >
                <div className='text-2xl'>{item.icon}</div>
              </div>
              <p className='font-semibold tracking-tight'>{item.title}</p>
              <p className='text-gray-500 tracking-tight'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
