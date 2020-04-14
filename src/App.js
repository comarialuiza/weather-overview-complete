import React from 'react';

import GlobalStyle from './styles/global';
import Menu from './components/Menu';
import MainOverview from './components/MainOverview';

function App() {
  return (
    <div id="container">
      <Menu />
      <MainOverview />
      <GlobalStyle />
    </div>
  );
}

export default App;
