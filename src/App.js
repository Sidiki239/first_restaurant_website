import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import AllMenu from './pages/AllMenu';
import Services from './pages/Services';
export default function App() {
  return (
   <ThemeProvider>
    <Router>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/menu' element={<AllMenu/>}/>
<Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
 
  );
}
