import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const comidas = [
  { nome: 'Feijão', temperos: ['Louro', 'Alho', 'Cebola', 'Pimenta-do-reino'] },
  { nome: 'Macarrão', temperos: ['Manjericão', 'Orégano', 'Alho', 'Tomilho'] },
  { nome: 'Churrasco', temperos: ['Sal grosso', 'Alho', 'Páprica', 'Alecrim'] },
  { nome: 'Carne de Panela', temperos: ['Cominho', 'Louro', 'Pimenta', 'Colorau'] },
  { nome: 'Frango', temperos: ['Curry', 'Colorau', 'Alho', 'Salsinha'] },
];

const HeaderContainer = styled.header`
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 16px rgba(30, 201, 107, 0.08);
  color: #1ec96b;
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1.5px solid #e0f7ef;
  @media (max-width: 600px) {
    height: auto;
    min-height: 54px;
    padding: 0 2px;
    justify-content: flex-start;
  }
`;

const Logo = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
  color: #1ec96b;
  letter-spacing: 2px;
  margin: 0 48px 0 0;
  position: absolute;
  left: 40px;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    left: 12px;
    margin: 0 16px 0 0;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 32px;
  filter: drop-shadow(0 2px 8px rgba(30,201,107,0.18));
  -webkit-box-reflect: below 0px linear-gradient(transparent, rgba(30,201,107,0.15));
  @media (max-width: 600px) {
    gap: 2px;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100vw;
    max-width: 100vw;
    row-gap: 2px;
  }
`;

const MenuItem = styled.div`
  position: relative;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: 8px;
  background: transparent;
  color: #1ec96b;
  transition: background 0.2s, color 0.2s;
  white-space: pre-line;
  &:hover {
    background: #1ec96b;
    color: #fff;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 3px 2px;
    min-width: 60px;
    text-align: center;
    margin: 0 1px;
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 48px;
  left: 0;
  background: #fff;
  color: #1ec96b;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(30, 201, 107, 0.15);
  min-width: 220px;
  padding: 18px 24px;
  z-index: 10;
  @media (max-width: 600px) {
    left: auto;
    right: 0;
    min-width: 140px;
    max-width: 90vw;
    padding: 12px 8px;
    font-size: 0.95rem;
  }
`;

const TemperosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TemperosItem = styled.li`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #1ec96b;
`;

export default function Header() {
  const [hovered, setHovered] = useState(null);

  return (
    <HeaderContainer>
      <Logo>Temperô</Logo>
      <Menu>
        {comidas.map((comida, idx) => (
          <MenuItem
            key={comida.nome}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {comida.nome}
            <AnimatePresence>
              {hovered === idx && (
                <Dropdown
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <strong>Temperos indicados:</strong>
                  <TemperosList>
                    {comida.temperos.map((t) => (
                      <TemperosItem key={t}>{t}</TemperosItem>
                    ))}
                  </TemperosList>
                </Dropdown>
              )}
            </AnimatePresence>
          </MenuItem>
        ))}
      </Menu>
    </HeaderContainer>
  );
} 