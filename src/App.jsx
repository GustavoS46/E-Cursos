import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavbarBanner from './components/Navbar/NavbarBanner';
import Hero from './components/Hero/Hero';
import NumberCount from './components/NumberCount/NumberCount';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Img1 from './assets/banner1.png';
import Img2 from './assets/banner2.png';
import Banner from './components/Banner/Banner';
import SubjectCard from './components/SubjectCard/SubjectCard';
import Testemonial from './components/Testemonial/Testemonial';
import Footer from './components/Footer/Footer';

const BannerData = {
  image: Img1,
  tag: 'PERSONALIZE COM SUA PROGRAMAÇÃO',
  title: 'Tutor online profissional personalizado em sua programação',
  subtitle: 'Tenha aulas especializadas e personalizadas em para cada aluno conforma a sua necessidade, com soluções práticas e adaptadas ao seu ritmo e objetivos. Desenvolva suas habilidades de forma eficaz com a ajuda de um tutor qualificado e focado no seu progresso.',
  link: '#',
};

const BannerData2 = {
  image: Img2,
  tag: 'PERSONALIZE COM SUA PROGRAMAÇÃO',
  title: 'Talento e tutor qualificado para atendê-lo para obter ajuda',
  subtitle: 'Conte com o suporte de profissionais altamente qualificados para esclarecer suas dúvidas e orientá-lo nas suas dificuldades. Receba ajuda personalizada e prática, garantindo aprendizado eficiente e resultados concretos.',
  link: '#',
};

const App = () => {
  return (
    <main>
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCount />
      <WhyChooseUs />
      <Banner {... BannerData} />
      <Banner {... BannerData2} reverse={true} />
      <SubjectCard />
      <Testemonial />
      <Footer />
    </main>
  )
}

export default App