import React from 'react';

import GlobalStyle from './styles/index';

import Menu from './components/Menu';
import Info from './components/Info';

function App() {
  return (
    <>
      <Menu />
      <Info />
      <GlobalStyle />
    </>
  );
}

export default App;
