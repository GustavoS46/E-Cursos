import React from 'react';
import CountUp from 'react-countup';

const NumberCount = () => {
  return (
    <div id='estudantes' className='bg-secondary text-white py-12'>
      <div className='container grid grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold tracking-tighter'>
            <CountUp 
              start={0} 
              end={70} 
              duration={3} 
              enableScrollSpy={true} 
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-medium tracking-tight'>Professores especialistas</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold tracking-tighter'>
            <CountUp 
              end={40} 
              suffix=' +'
              duration={3} 
              enableScrollSpy={true} 
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-medium tracking-tight'>Cursos</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold tracking-tighter'>
            <CountUp 
              end={6000} 
              suffix=' +'
              duration={3} 
              enableScrollSpy={true} 
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-medium tracking-tight'>Horas de cursos</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold tracking-tighter'>
            <CountUp 
              end={12467} 
              suffix=' +'
              duration={3} 
              enableScrollSpy={true} 
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-medium tracking-tight'>Alunos ativos</p>
        </div>
      </div>
    </div>
  )
}

export default NumberCount;
