import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ServiceCard = ({ title, description }) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default ServiceCard;
