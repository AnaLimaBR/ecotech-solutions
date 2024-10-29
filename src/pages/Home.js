import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2E8B57;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #666;
`;

const Home = () => {
  return (
    <Section>
      <Title>Bem-vindo à EcoTech Solutions</Title>
      <Subtitle>Inovação tecnológica para um futuro sustentável.</Subtitle>
    </Section>
  );
};

export default Home;
