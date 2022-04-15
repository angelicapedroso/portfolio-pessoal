import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='projects' element={ <Projects /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}
