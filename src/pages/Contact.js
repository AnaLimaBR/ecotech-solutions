import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <Section>
      <h2>Entre em Contato</h2>
      <p>Email: contato@ecotech.com</p>
      <p>Telefone: (31) 1234-5678</p>
      <button>Envie uma Mensagem</button>
    </Section>
  );
};

export default Contact;
