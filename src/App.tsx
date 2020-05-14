import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <h1>Bem vindos ao meu site!</h1>
      <p>Meu nome é Jonas B. Franco, me siga nas redes sociais!</p>
      <a
        href="https://www.instagram.com/jonasbfranco"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jonas - Instagram
      </a>
      <br />
      <a
        href="https://www.facebook.com/jonasbfranco"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jonas - Facebook
      </a>
      <br />
      <a
        href="https://www.youtube.com/jonasfranco?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tecnoob - Youtube
      </a>
    </>
  );
};

export default App;
