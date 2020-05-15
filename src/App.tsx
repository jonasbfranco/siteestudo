import React from 'react';

/* import Home from './pages/Home';   */
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
