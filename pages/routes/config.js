
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../home/about';

function Config() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Config;
