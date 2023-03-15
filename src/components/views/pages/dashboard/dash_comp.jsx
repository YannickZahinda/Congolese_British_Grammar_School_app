import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Teachers from '../teachers/index';
import Home from '../home';
import Students from '../students/index';
import Events from '../activities';

const DashboardComponent = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </React.Fragment>
  );
}
 
export default DashboardComponent;