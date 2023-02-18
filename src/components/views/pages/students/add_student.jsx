import React, {useState} from "react";

const AddStudent = () => {
  const [state, setState] = useState({
    nom: '',
    post_nom: '',
    classe: '',
    education_level: '',
    parent_number: '',
  });

  const [allErrors, setallErrors] = useState({});
  return (<h1>ADD NEW STUDENT</h1>);
}
 
export default AddStudent;