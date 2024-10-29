import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 EcoTech Solutions. Todos os Direitos Reservados.</p>
  </FooterContainer>
);

export default Footer;
