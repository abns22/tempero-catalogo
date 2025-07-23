import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import feijaoImg from '../images/feijao.jpg';
import macarraoImg from '../images/macarrao.jpg';
import churrascoImg from '../images/churrasco.jpg';
import carneImg from '../images/carne.jpg';
import frangoImg from '../images/frango.jpg';

const secoes = [
  { nome: 'Feijão', img: feijaoImg, descricao: 'Base da culinária brasileira e fonte de proteína vegetal.' },
  { nome: 'Macarrão', img: macarraoImg, descricao: 'Um dos pratos mais consumidos no mundo, símbolo da Itália.' },
  { nome: 'Churrasco', img: churrascoImg, descricao: 'Tradição no Brasil, especialmente no Sul, reunindo amigos e família.' },
  { nome: 'Carne de Panela', img: carneImg, descricao: 'Sinônimo de comida caseira, macia e cheia de sabor.' },
  { nome: 'Frango', img: frangoImg, descricao: 'Versátil e presente em receitas de todo o país.' },
];

const CardsContainer = styled.section`
  width: 100vw;
  background: #fff;
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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  width: 80vw;
  max-width: 1100px;
  @media (max-width: 900px) {
    width: 95vw;
    gap: 18px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 98vw;
    gap: 12px;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(120deg, #b2f7ef 0%, #fff 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(30, 201, 107, 0.10);
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  @media (max-width: 600px) {
    min-height: 220px;
    padding: 14px 8px 10px 8px;
  }
`;

const CardImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 18px;
  border: 4px solid #1ec96b;
  @media (max-width: 600px) {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
  }
`;

const Nome = styled.h3`
  color: #1ec96b;
  font-size: 1.2rem;
  margin: 0;
`;

const Descricao = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 12px 0 0 0;
  text-align: center;
`;

export default function CardsSecoes() {
  return (
    <CardsContainer>
      <Titulo>Comidas Típicas</Titulo>
      <CardsGrid>
        {secoes.map((s, idx) => (
          <Card
            key={s.nome}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(30,201,107,0.18)' }}
          >
            <CardImg src={s.img} alt={s.nome} />
            <Nome>{s.nome}</Nome>
            <Descricao>{s.descricao}</Descricao>
          </Card>
        ))}
      </CardsGrid>
    </CardsContainer>
  );
} 