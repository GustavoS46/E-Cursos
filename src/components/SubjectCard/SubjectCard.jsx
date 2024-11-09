import React from 'react';
import { motion } from 'framer-motion';
import { FaComputer, FaBook } from 'react-icons/fa6';

const subjectList = [
  {
    id: 1,
    name: 'Engenharia',
    icon: <FaComputer />,
    color: "#0063FF",
    delay: 0.2,
  },
  {
    id: 2,
    name: 'Inglês',
    icon: <FaBook />,
    color: "#00C986",
    delay: 0.3,
  },
  {
    id: 3,
    name: 'Programação',
    icon: <FaComputer />,
    color: "#922AEE",
    delay: 0.4,
  },
  {
    id: 4,
    name: 'Ciência',
    icon: <FaBook />,
    color: "#EA7516",
    delay: 0.2,
  },
  {
    id: 5,
    name: 'História',
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 6,
    name: 'Psicologia',
    icon: <FaBook />,
    color: "#986D1D",
    delay: 0.7,
  },
  {
    id: 7,
    name: 'Web design',
    icon: <FaBook />,
    color: "#B93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: 'Veja tudo',
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

const SubjectCard = () => {
  return (
    <div id='sobre' className='container py-1 md:py-24 overflow-hidden'>
      {/* header section */}
      <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
        <h1 className='text-orange-400 uppercase font-semibold tracking-tight'>
          ENCONTRE TUTORES A QUALQUER HORA
        </h1>
        <h1 className='text-xl lg:text-2xl font-semibold tracking-tighter'>
          Encontre o tutor online em qualquer para tirar suas dúvidas em qualquer assunto
        </h1>
      </div>
      
      {/* cards section */}
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden'
      >
        {subjectList.map((subject) => (
          <motion.div 
            key={subject.id}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: subject.delay,
            }}
            className='border border-secondary/20 rounded-lg flex justify-center items-center p-4 gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer'
          >
            <div 
              style={{ 
                color: subject.color,
                backgroundColor: subject.color + '20' 
              }}
              className='w-10 h-10 rounded-md flex justify-center items-center'
            >
              {subject.icon}
            </div>
            <p>{subject.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SubjectCard;
