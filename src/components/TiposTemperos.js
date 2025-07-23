import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const tipos = [
  { nome: 'Ervas', descricao: 'Folhas aromáticas como manjericão, orégano, alecrim, salsinha.' },
  { nome: 'Especiarias', descricao: 'Sementes, cascas e raízes como pimenta, canela, noz-moscada.' },
  { nome: 'Misturas', descricao: 'Combinações como curry, chimichurri, tempero baiano.' },
  { nome: 'Desidratados', descricao: 'Temperos secos como alho em pó, cebola em flocos, salsa seca.' },
];

const TiposContainer = styled.section`
  width: 100vw;
  background: #fff;
  padding: 60px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 900px;
`;

const Card = styled(motion.div)`
  background: linear-gradient(120deg, #b2f7ef 0%, #fff 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(30, 201, 107, 0.10);
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
  cursor: pointer;
  transition: box-shadow 0.2s;
`;

const Nome = styled.h3`
  color: #1ec96b;
  font-size: 1.2rem;
  margin: 0 0 8px 0;
`;

const Descricao = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0;
`;

export default function TiposTemperos() {
  return (
    <TiposContainer>
      <Titulo>Tipos de Temperos</Titulo>
      <CardsGrid>
        {tipos.map((t, idx) => (
          <Card
            key={t.nome}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(30,201,107,0.18)' }}
          >
            <Nome>{t.nome}</Nome>
            <Descricao>{t.descricao}</Descricao>
          </Card>
        ))}
      </CardsGrid>
    </TiposContainer>
  );
} 