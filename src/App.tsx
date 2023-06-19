import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Epk from './components/Epk/Epk';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={ <Home />} />
          <Route path="about" element={ <About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="epk" element={<Epk />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
