import React from 'react';

import GlobalStyle from './styles/global';
import Menu from './components/Menu';
import Overview from './components/Overview';

function App() {
  return (
    <div id="container">
      <Menu />
      <Overview />
      <GlobalStyle />
    </div>
  );
}

export default App;
