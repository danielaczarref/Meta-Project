import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import ContextApp from 'contexts'
import theme from 'styles/theme'
import Routes from 'routes'
import './App.css';

function App() {
  return (
  //  <ThemeProvider theme={theme}>
     <ContextApp>
        <Routes />
     </ContextApp>
  //  </ThemeProvider>
  );
}

export default App;
