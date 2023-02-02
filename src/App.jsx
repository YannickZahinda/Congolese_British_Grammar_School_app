import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage'
import Login from './components/login';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}


export default App