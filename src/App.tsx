import React from 'react';
import './App.css';
import Appbar from './components/appbar/Appbar';
import { Catalogo } from './components/catalogo/Catalogo';
import { Footer } from './components/footer/Footer';
import { Provedores } from './components/provedores/Provedores';
import { Search } from './components/search/Search';
import { About } from './components/about-us/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>

      <Appbar/>
      <Switch>
        
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Search/>
          <Catalogo />
          <Provedores />
          
        </Route>
      </Switch>
      <Footer />

    </Router>
    </>
  );
}

export default App;
