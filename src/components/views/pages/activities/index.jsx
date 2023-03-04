import React from 'react';
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3>All the Events</h3>
        <button className="btn btn-primary">
          <Link to='/new_event' className="text-decoration-none text-light">ADD EVENT</Link>
        </button>
      </div>
    </div>
  );
}
 
export default Events;