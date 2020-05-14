import React from 'react';
import { FiSun } from 'react-icons/fi';
import { Background, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <p>JBF</p>
        <ul>
          <FiSun size={25} color="#D4AE" />
          <li>Projetos</li>
          <li>Sobre Mim</li>
          <li>Contato</li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
