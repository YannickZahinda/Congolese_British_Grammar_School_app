import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import './style.css'

const AddTeacher = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone_number: '',
    education_level: [],
    photo: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const new_errors = {};
    if(state.name.trim() === '')
      new_errors.name = 'name is required.'
    if(state.email.trim() === '')
      new_errors.email = 'email is required.'
    return Object.keys(new_errors).length === 0 ? null : new_errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const allErrors = validate();
    console.log(allErrors);
    setErrors(allErrors || {});
    if(allErrors) return;

    // Call the server
    console.log('submitted');
    console.log(state);
  }

  const handleChange = (e) => {
    const {name, value} = e.currentTarget
    setState((prev) => {
      return {...prev, [name]: value}
    })
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
          {errors.name && <div className="alert alert-danger">{errors.name}</div>}
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
          {errors.email && <div className="alert alert-danger">{errors.email}</div>}
          {/* {<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>} */}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Numero de telephone</label>
          <input
          value={phone_number}
            type="tel"
            name="phone_number"
            className="form-control"
            id="phone"
            placeholder="+243-000-000-000"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="w_phone" className="form-label">Numero WhatsApp</label>
          <input
            type="tel"
            className="form-control"
            id="w_phone"
            placeholder="+243-000-000-000"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="niveau_d'education" className="form-label">Niveau d'education</label>
          <input
            type="text"
            className="form-control"
            id="niveau_d'education"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo de l'enseignant</label>
          <input type="file"
          className="form-control"
          id="photo"
        />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div><Link to="/dashboard/teachers">See all teachers</Link></div>
      </form>
    </div>
  );
}
 
export default AddTeacher;