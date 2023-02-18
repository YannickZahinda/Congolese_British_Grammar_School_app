import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage'
import Login from './components/login';
import Dashboard from './components/views/pages/dashboard';
import AddTeacher from './components/views/pages/teachers/add_teacher';
import AddStudent from './components/views/pages/students/add_student';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/new_teacher" element={<AddTeacher />} />
        <Route path="/new_student" element={<AddStudent />} />
      </Routes>
    </Router>
  )
}


export default App