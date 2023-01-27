import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/pages/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
