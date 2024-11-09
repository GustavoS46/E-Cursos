import React from 'react';
import HeroImg from '../../assets/hero.png';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animations';

const Hero = () => {
    return (        
        <>
            <div id='home' className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                {/* Info */}
                <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
                    <div className='text-center md:text-left space-y-4'> {/* Ajuste aqui para space-y */}
                        <motion.p 
                            variants={SlideRight(0.3)}
                            initial='hidden'
                            animate='visible'
                            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                            className='text-orange-400 uppercase font-semibold tracking-tight'>
                            Garantia de 100% de satisfação
                        </motion.p>
                        <motion.h1 
                            variants={SlideRight(0.5)}
                            initial='hidden'
                            animate='visible'
                            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                            className='text-5xl font-semibold lg:text-6xl !leading-tight tracking-tighter'>
                            Encontre seu <br />
                            <span className='text-primary'>
                                tutor perfeito
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(0.7)}
                            initial='hidden'
                            animate='visible'
                            transition={{ type: 'spring', stiffness: 100, delay: 0.7 }}
                            className='font-medium tracking-tight'
                        >
                            Você está buscando novas oportunidades e quer se especializar para o mercado de trabalho?
                        </motion.p>
                        <motion.div 
                            variants={SlideRight(1.0)}
                            initial='hidden'
                            animate='visible'
                            transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                            className='flex gap-8 justify-center md:justify-start items-center'> 
                            <button className='primary-btn tracking-tight'>
                                Comece
                            </button>
                            <button className='flex justify-end items-center tracking-tight gap-2'>
                                <span className='w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center'>
                                    <FaPlay className='text-secondary' />
                                </span>
                                Veja como funciona
                            </button>
                        </motion.div>
                    </div>
                </div>
                {/* Hero image */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                        src={HeroImg} 
                        alt="Imagem do herói" 
                        className='max-w-full h-auto' />
                </div>
            </div>
        </>
    );
}

export default Hero;
