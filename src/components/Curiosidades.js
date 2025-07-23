import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const curiosidades = [
  'O louro é usado desde a Grécia Antiga para dar sabor e aroma aos pratos.',
  'O curry é uma mistura de especiarias muito popular na culinária indiana.',
  'A páprica é feita a partir de pimentões secos e moídos.',
  'O manjericão é considerado uma erva sagrada em algumas culturas.',
  'O alho é um dos temperos mais antigos do mundo, usado há mais de 5.000 anos.'
];

const CuriosidadesContainer = styled.section`
  width: 100vw;
  background: linear-gradient(90deg, #1ec96b 0%, #b2f7ef 100%);
  padding: 60px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 32px;
  font-family: 'Montserrat', sans-serif;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 80vw;
  max-width: 900px;
`;

const Item = styled(motion.li)`
  background: #fff;
  color: #1ec96b;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(30, 201, 107, 0.10);
  padding: 18px 24px;
  margin-bottom: 18px;
  font-size: 1.1rem;
`;

export default function Curiosidades() {
  return (
    <CuriosidadesContainer>
      <Titulo>Curiosidades sobre Temperos</Titulo>
      <Lista>
        {curiosidades.map((c, idx) => (
          <Item
            key={c}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 80 }}
          >
            {c}
          </Item>
        ))}
      </Lista>
    </CuriosidadesContainer>
  );
} 