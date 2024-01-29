import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator.js';

export default function App() {
  // const [value, setValue] = useState('');
  return (
    <>
      <Navbar />
      <Calculator />
      <About />
    </>
  )
};