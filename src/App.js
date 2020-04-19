import React from 'react';

import GlobalStyle from './styles/index';

import { WeatherProvider } from './context/context';
import Menu from './components/Menu';
import Info from './components/Info';

function App() {
  return (
    <>
      <WeatherProvider>
        <div className="container">
          <Menu />
          <Info />
        </div>
        <GlobalStyle />
      </WeatherProvider>
    </>
  );
}

export default App;
