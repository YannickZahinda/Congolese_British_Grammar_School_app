import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

const AddEvent = () => {
  const [state, setState] = useState({
    title: '',
    description: ''
  });

  const [allErrors, setallErrors] = useState({});
  return (
    <div className="form__new">
      <h1>ADD AN EVENT</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className='form-label'>Titre de l'activite</label>
          <input
          type="text"
          name='title'
          className='form-control'
          autoFocus
          />
          {allErrors.title && <div className="alert alert-danger">{allErrors.title}</div> }
        </div>
        <div className="mb-3">
          <label htmlFor="description" className='form-label'>Description de l'activite</label>
          <textarea
          type="text"
          name='description'
          className='form-control'
          style={{height: '150px'}}
          />
          {allErrors.description && <div className="alert alert-danger">{allErrors.description}</div> }
        </div>
      </form>
    </div>
  );
}
 
export default AddEvent;