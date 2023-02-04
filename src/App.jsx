import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage'
import Login from './components/login';
import Dashboard from './components/views/pages/dashboard';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}


export default App