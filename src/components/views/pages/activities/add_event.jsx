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

  const schema = {
    title: Joi.string().required().label("Titre"),
    description: Joi.string().required().label("Description")
  };

  const validate = () => {
    const result = Joi.validate(state, schema, {abortEarly: false});
    if(!result.error) return;
    const errors = {};
    for(let item of result.error.details) errors[item.path[0]] = item.message;
    return errors
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const new_schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, new_schema);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setallErrors(errors || {});

    // Call the Server
  };

  const handleChange = (e) => {
    const errors = {...allErrors};
    const errorMessage = validateProperty(e.currentTarget);
    if(errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const {name, value} = e.currentTarget;
    setState((prev) => {
      return {...prev, [name]: value}
    });

    setallErrors(errors);
  };

  const {title, description} = state;
  return (
    <div className="form__new">
      <h1>ADD AN EVENT</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className='form-label'>Titre de l'activite</label>
          <input
          type="text"
          name='title'
          value={title}
          className='form-control'
          autoFocus
          onChange={handleChange}
          />
          {allErrors.title && <div className="alert alert-danger">{allErrors.title}</div> }
        </div>
        <div className="mb-3">
          <label htmlFor="description" className='form-label'>Description de l'activite</label>
          <textarea
          type="text"
          name='description'
          value={description}
          className='form-control'
          style={{height: '150px'}}
          onChange={handleChange}
          />
          {allErrors.description && <div className="alert alert-danger">{allErrors.description}</div> }
        </div>
        <button type="submit" className="btn btn-primary" disabled={validate()}>Save</button>
        <div><Link to="/dashboard/events">Voir toute les activites</Link></div>
      </form>
    </div>
  );
}
 
export default AddEvent;