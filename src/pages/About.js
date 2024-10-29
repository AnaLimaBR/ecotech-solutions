import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 1rem;
`;

const About = () => {
  return (
    <Section>
      <h2>Sobre Nós</h2>
      <p>A EcoTech Solutions é uma empresa que une tecnologia de ponta e sustentabilidade. Nosso objetivo é criar soluções tecnológicas que contribuam para um mundo mais verde e eficiente.</p>
    </Section>
  );
};

export default About;
