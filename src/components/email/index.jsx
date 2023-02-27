import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Joi, { validate } from 'joi-browser';

const EmailContact = () => {
  const [state, setState] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [allErrors, setallErrors] = useState({});

  const schema = {
    user_name: Joi.string().required().label("Name"),
    user_email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message")
  };

  const validate = () => {
    const result = Joi.validate(state, schema, {abortEarly: false});
    if(!result.error) return;

    const errors = {};
    for(let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = {[name]: value };
    const new_schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, new_schema);

    return error ? error.details[0].message : null;
  }

  const handleChange = (e) => {
    const errors = { ...allErrors };
    const errorMessage = validateProperty(e.currentTarget);
    if(errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    setallErrors(errors);

    const { name, value } = e.currentTarget;
    setState((prev) => {
      return {...prev, [name]: value}
    });

    console.log(state);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1w6beip",
        "template_ooexnuy",
        form.current,
        "Wtg9cj8C77mOeFuWI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Votre email a été envoyé avec succes');
        },
        (error) => {
          console.log(error.text);
          console.log('Couldn\'t send message');
        }
      );

      const errors = validate();
      setallErrors(errors || {});

  };

  const {user_name, user_email, message} = state;

  return (
    <div className="text-center  bg-[#96C2D8] p-4">
        <a name='contact'></a>
      <h1>Contactez-nous</h1>
      <form ref={form} onSubmit={sendEmail} className='w-1/2 m-auto p-2 flex flex-col gap-5'>
        <div className='text-start'>
          <label>Name</label>
          <input
            type="text"
            value={user_name}
            name="user_name"
            onChange={handleChange}
            className='w-full p-3 rounded-lg '
          />
          {allErrors.user_name && <div className='alert alert-danger'>{allErrors.user_name}</div>}
        </div>
        <div className='text-start'>
          <label>Email</label>
          <input
            type="email"
            value={user_email}
            name="user_email"
            onChange={handleChange}
            className='w-full p-3 rounded-lg '
          />
          {allErrors.user_email && <div className='alert alert-danger'>{allErrors.user_email}</div>}
        </div>
        <div className='text-start'>
          <label>Message</label>
          <textarea
            value={message}
            onChange={handleChange}
            name="message"
            className='w-full rounded-lg p-4 '
          />
          {allErrors.message && <div className='alert alert-danger'>{allErrors.message}</div>}
        </div>
        <div className='text-center'>
          <input type="submit" value="Send" disabled={validate()} className='bg-[#CA3961] p-3 rounded-lg w-6/12 btn btn-primary' />
        </div>
      </form>
    </div>
  );
};

export default EmailContact;
