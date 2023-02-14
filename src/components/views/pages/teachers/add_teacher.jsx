import React from "react";
import { Link } from "react-router-dom";

const AddTeacher = () => {
  return (
    <div className="form__new">
      <h1>ADD NEW TEACHER</h1>
      <form className="teacher__form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom de l'enseignant</label>
          <input type="text" className="form-control" id="name" placeholder="Entrer le nom"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="john@gmail.com"/>
          {/* {<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>} */}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Numero de telephone</label>
          <input type="tel" className="form-control" id="phone" placeholder="+243-000-000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
        </div>
        <div className="mb-3">
          <label htmlFor="fb_link" className="form-label">Lien Facebook</label>
          <input type="url" className="form-control" id="fb_link" />
        </div>
        <div className="mb-3">
          <label htmlFor="w_phone" className="form-label">Numero WhatsApp</label>
          <input type="tel" className="form-control" id="w_phone" placeholder="+243-000-000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom de l'enseignant</label>
          <input type="text" className="form-control" id="name" />
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