import React, {useState} from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

const AddStudent = () => {
  const [state, setState] = useState({
    nom: '',
    post_nom: '',
    classe: '',
    education_level: '',
    parent_number: '',
  });

  const [allErrors, setallErrors] = useState({});

  const schema = {
    nom: Joi.string().required().label("Name"),
    post_nom: Joi.string().required().label("Surname"),
    classe: Joi.string().required().label("Classe"),
    education_level: Joi.string().required().label("Niveau"),
    parent_number: Joi.number().required().label("Number")
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
  const {nom, post_nom, classe, education_level, parent_number} = state;
  return (
    <div className="form__new">
      <h1>ADD NEW STUDENT</h1>
      <form className="teacher__form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom de l'eleve</label>
          <input type="text"
            value={nom}
            name="nom"
            className="form-control"
            id="nom"
            placeholder="Entrer le nom"
            autoFocus
            onChange={handleChange}
          />
          {allErrors.nom && <div className="alert alert-danger">{allErrors.nom}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="post_nom" className="form-label">Post Nom de l'eleve</label>
          <input
          value={post_nom}
            type="text"
            name="post_nom"
            className="form-control"
            id="post_nom"
            placeholder="Entrer le Post Nom"
            onChange={handleChange}
          />
          {allErrors.post_nom && <div className="alert alert-danger">{allErrors.post_nom}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="classe" className="form-label">Classe</label>
          <input
          value={classe}
            type="text"
            name="classe"
            className="form-control"
            id="classe"
            placeholder="Entrer la Classe"
            onChange={handleChange}
          />
          {allErrors.classe && <div className="alert alert-danger">{allErrors.classe}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="niveau_d'education" className="form-label">Niveau d'education</label>
          <select name="education_level" id="niveau_d'education" className="form-select">
            <option value="">Open to select a level</option>
            <option value="Maternel">Maternel</option>
            <option value="Primaire">Primaire</option>
            <option value="Secondaire">Secondaire</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="numero_parent" className="form-label">Numero du Parent</label>
          <input
          type="tel"
          value={parent_number}
          name="parent_number"
          className="form-control"
          id="numero_parent"
          placeholder="Entrer le Numero de Parent"
          onChange={handleChange}
        />
          {allErrors.parent_number && <div className="alert alert-danger">{allErrors.parent_number}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div><Link to="/dashboard/students">Voir toute la liste</Link></div>
      </form>
    </div>
  );
}
 
export default AddStudent;