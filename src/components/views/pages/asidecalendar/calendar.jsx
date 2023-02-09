import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
 
export default MyCalendar;