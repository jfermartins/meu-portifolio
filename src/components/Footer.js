import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2024 Seu Nome. Todos os direitos reservados.
    </FooterContainer>
  );
};

export default Footer;
