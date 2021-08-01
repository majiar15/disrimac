import React from 'react';
import './App.css';
import Appbar from './components/appbar/Appbar';
import { Search } from './components/search/Search';
function App() {
  return (
    <>
      <Appbar/>
      <Search/>
    </>
  );
}

export default App;
