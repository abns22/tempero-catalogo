import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Header from './components/Header';
import CarrosselTemperos from './components/CarrosselTemperos';
import CardsSecoes from './components/CardsSecoes';
import Curiosidades from './components/Curiosidades';
import TiposTemperos from './components/TiposTemperos';
import { motion } from 'framer-motion';
import welcomeImg from './images/1.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', Arial, sans-serif;
    background: #f6fff9;
    overflow-x: hidden;
  }
`;

const Footer = styled.footer`
  background: linear-gradient(90deg, #1ec96b 0%, #b2f7ef 100%);
  color: #fff;
  text-align: center;
  padding: 32px 0 16px 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const ResponsiveBannerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 600px) {
    h1 {
      font-size: 2rem !important;
    }
    p {
      font-size: 1rem !important;
    }
    a {
      font-size: 1rem !important;
      padding: 10px 18px !important;
    }
  }
`;

function App() {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <Header />
      <ParallaxBanner
        layers={[
          {
            image: welcomeImg,
            speed: -30,
            style: { objectFit: 'contain' },
          },
          {
            speed: 0,
            children: (
              <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.45)',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }} />
            ),
          },
        ]}
        style={{ height: window.innerWidth < 600 ? 320 : 420 }}
      >
        <ResponsiveBannerDiv>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{
              fontSize: '3.2rem',
              fontFamily: 'Pacifico, cursive',
              margin: 0,
              background: 'linear-gradient(90deg, #1ec96b 0%, #7ee8c4 60%, #b2f7ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 12px rgba(30,201,107,0.10))',
            }}
          >
            Bem-vindo ao Temperô
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring' }}
            style={{ fontSize: '1.4rem', marginTop: 16, color: '#fff', textShadow: '0 2px 8px rgba(30,201,107,0.10)' }}
          >
            O melhor catálogo de temperos para suas receitas!
          </motion.p>
          <a
            href="https://wa.me/5599999999999?text=Olá! Gostaria de pedir um orçamento ou saber valores/sabores dos temperos."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 32,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: 'linear-gradient(90deg, #1ec96b 0%, #7ee8c4 100%)',
              color: '#fff',
              borderRadius: 32,
              padding: '14px 28px',
              fontSize: 20,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(30,201,107,0.18)',
              transition: 'filter 0.2s',
              filter: 'brightness(1)',
            }}
            onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseOut={e => e.currentTarget.style.filter = 'brightness(1)'}
            title="Fale conosco no WhatsApp"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.5 19.5c-.3-.2-1.8-.9-2.1-1-..." fill="#fff"/>
            </svg>
            Fale conosco no WhatsApp
          </a>
        </ResponsiveBannerDiv>
      </ParallaxBanner>
      <CardsSecoes />
      <CarrosselTemperos />
      <Curiosidades />
      <TiposTemperos />
      <Footer>
        © {new Date().getFullYear()} Temperô. Todos os direitos reservados.
      </Footer>
    </ParallaxProvider>
  );
}

export default App;
