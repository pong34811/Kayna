
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/home';

function Config() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Config;
