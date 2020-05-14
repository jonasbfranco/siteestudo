import React from 'react';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
