import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #2E8B57;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    font-size: 1rem;
    color: #333;

    &:hover {
      color: #2E8B57;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>EcoTech Solutions</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/contact">Contato</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header;
