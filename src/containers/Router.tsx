import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Main from './Main';
import Services from './Services';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Router;
