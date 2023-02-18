import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi, { abort } from "joi-browser";
import './style.css'

const AddTeacher = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone_number: '',
    education_level: '',
    photo: '',
  });

  const [allErrors, setallErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone_number: Joi.number().integer().required().label("Phone number"),
    education_level: Joi.string().required(),
    photo: Joi.string().required().label("Photo")
  }

  const validate = () => {
    const result = Joi.validate(state, schema, {abortEarly: false});
    if(!result.error) return;
    const errors = {};
    for(let item of result.error.details) errors[item.path[0]] = item.message;
    return errors
  }

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const new_schema = { [name]: schema[name] };
    const {error} = Joi.validate(obj, new_schema);

    return error ? error.details[0].message : null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setallErrors(errors || {});
    if(errors) return;

    // Call the server
    console.log('submitted');
    console.log(state);
  }

  const handleChange = (e) => {
    const errors = {...allErrors};
    const errorMessage = validateProperty(e.currentTarget);
    if(errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const {name, value} = e.currentTarget
    setState((prev) => {
      return {...prev, [name]: value}
    });

    setallErrors(errors)
  }
  const {name, email, phone_number, photo} = state;
  return (
    <div className="form__new">
      <h1>ADD NEW TEACHER</h1>
      <form className="teacher__form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom de l'enseignant</label>
          <input type="text"
            value={name}
            name="name"
            className="form-control"
            id="name"
            placeholder="Entrer le nom"
            autoFocus
            onChange={handleChange}
          />
          {allErrors.name && <div className="alert alert-danger">{allErrors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
          value={email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
          {allErrors.email && <div className="alert alert-danger">{allErrors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Numero de telephone</label>
          <input
          value={phone_number}
            type="tel"
            name="phone_number"
            className="form-control"
            id="phone"
            placeholder="+243 000 000 000"
            onChange={handleChange}
          />
          {allErrors.phone_number && <div className="alert alert-danger">{allErrors.phone_number}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="niveau_d'education" className="form-label">Niveau d'education</label>
          <select name="education_level" id="" className="form-select">
            <option selected>Open to select a level</option>
            <option value="Maternel">Maternel</option>
            <option value="Primaire">Primary</option>
            <option value="Secondaire">Secondaire</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo de l'enseignant</label>
          <input type="file"
          className="form-control"
          id="photo"
        />
          {allErrors.photo && <div className="alert alert-danger">{allErrors.photo}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div><Link to="/dashboard/teachers">See all teachers</Link></div>
      </form>
    </div>
  );
}
 
export default AddTeacher;