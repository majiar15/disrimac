import React from 'react';
import './App.css';
import Appbar from './components/appbar/Appbar';
import { Catalogo } from './components/catalogo/Catalogo';
import { Footer } from './components/footer/Footer';
import { Provedores } from './components/provedores/Provedores';
import { Search } from './components/search/Search';
function App() {
  return (
    <>
      <Appbar/>
      <Search/>
      <Catalogo />
      <Provedores />
      <Footer />
    </>
  );
}

export default App;
