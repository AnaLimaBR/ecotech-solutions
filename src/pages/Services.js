import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const Section = styled.section`
  padding: 3rem 1rem;
`;

const Services = () => {
  const serviceData = [
    { title: 'Consultoria em Energia Renovável', description: 'Ajudamos empresas a migrar para fontes de energia sustentável.' },
    { title: 'Automação Inteligente', description: 'Automatize seus processos com tecnologias ecoeficientes.' },
    { title: 'Análise de Dados Verdes', description: 'Utilize dados para otimizar seus processos com foco em sustentabilidade.' },
  ];

  return (
    <Section>
      <h2>Nossos Serviços</h2>
      {serviceData.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </Section>
  );
};

export default Services;
