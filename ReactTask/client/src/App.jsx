import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Info from './Components/Info/Info';

import './App.css'

function App() {
  

  return (
    <div className="app">
      <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Info" element={<Info/>}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
