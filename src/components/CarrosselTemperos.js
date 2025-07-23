import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import temperoImg from '../images/1.jpg';
import louroImg from '../images/louro.jpg';
import { useSwiperSlide } from 'swiper/react';

const temperos = [
  { nome: 'Louro', img: louroImg, descricao: 'Folha aromática, muito usada em feijão e carnes.' },
  { nome: 'Alho', img: temperoImg, descricao: 'Base de muitos pratos, realça o sabor dos alimentos.' },
  { nome: 'Páprica', img: temperoImg, descricao: 'Feita de pimentão seco, dá cor e sabor marcante.' },
  { nome: 'Manjericão', img: temperoImg, descricao: 'Erva aromática, essencial em molhos e massas.' },
  { nome: 'Orégano', img: temperoImg, descricao: 'Muito usado em pizzas, molhos e saladas.' },
  { nome: 'Curry', img: temperoImg, descricao: 'Mistura de especiarias, típico da culinária indiana.' },
  { nome: 'Alecrim', img: temperoImg, descricao: 'Aromático, ótimo para carnes e batatas.' },
];

const CarrosselContainer = styled.section`
  width: 100vw;
  background: linear-gradient(90deg, #b2f7ef 0%, #1ec96b 100%);
  padding: 60px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 32px 0 40px 0;
  }
`;

const Titulo = styled.h2`
  color: #1ec96b;
  font-size: 2.2rem;
  margin-bottom: 32px;
  font-family: 'Montserrat', sans-serif;
`;

const SlideCard = styled(motion.div)`
  background: #fff;
  border-radius: 24px;
  box-shadow: ${({ $active }) => $active ? '0 8px 32px rgba(30, 201, 107, 0.10)' : 'none'};
  opacity: ${({ $active }) => $active ? 1 : 0.5};
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;
  min-height: 400px;
  @media (max-width: 600px) {
    min-width: 100px;
    min-height: 260px;
    padding: 10px 2px 8px 2px;
  }
`;

const TemperosImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 18px;
  border: 4px solid #b2f7ef;
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
`;

const Nome = styled.h3`
  color: #1ec96b;
  font-size: 1.3rem;
  margin: 0;
`;

const Descricao = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 12px 0 0 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin: 6px 0 0 0;
  }
`;

const BotaoReceita = styled.a`
  display: inline-block;
  margin-top: 32px;
  background: linear-gradient(90deg, #1ec96b 0%, #7ee8c4 100%);
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(30,201,107,0.10);
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 8px 14px;
    margin-top: 18px;
  }
`;

export default function CarrosselTemperos() {
  return (
    <CarrosselContainer>
      <Titulo>Conheça nossos temperos</Titulo>
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 600 ? 1.2 : 3}
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ width: window.innerWidth < 600 ? '80vw' : '80vw', maxWidth: window.innerWidth < 600 ? 320 : 900 }}
      >
        {temperos.map((t, idx) => (
          <SwiperSlide key={t.nome}>
            <SlideCardWrapper>
              <SlideCardWithActive nome={t.nome} img={t.img} idx={idx} />
            </SlideCardWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarrosselContainer>
  );
}

function SlideCardWithActive({ nome, img, idx }) {
  const swiperSlide = useSwiperSlide();
  const tempero = temperos.find(t => t.nome === nome);
  return (
    <SlideCard $active={swiperSlide.isActive}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <TemperosImg src={img} alt={nome} />
      <Nome>{nome}</Nome>
      <Descricao>{tempero?.descricao}</Descricao>
      <BotaoReceita href="#" title={`Ver receitas com ${nome}`}>Ver receitas com {nome}</BotaoReceita>
    </SlideCard>
  );
}

const SlideCardWrapper = styled.div``; 