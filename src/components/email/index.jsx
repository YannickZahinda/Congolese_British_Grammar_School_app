import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContact = () => {
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
          console.log('Message sent');
        },
        (error) => {
          console.log(error.text);
          console.log('Couldn\'t send message');
        }
      );
  };

  return (
    <div className="text-center  bg-[#96C2D8] p-4">
        <a name='contact'></a>
      <h1>Contactez-nous</h1>
      <form ref={form} onSubmit={sendEmail} className='w-1/2 m-auto p-2 flex flex-col gap-5'>
        <div className='text-start'>
          <label>Name</label>
          <input type="text" name="user_name"  className='w-full p-3 rounded-lg' />
        </div>
        <div className='text-start'>
          <label>Email</label>
          <input type="email" name="user_email"  className='w-full p-3 rounded-lg'/>
        </div>
        <div className='text-start'>
          <label>Message</label>
          <textarea name="message"  className='w-full rounded-lg p-4'/>
        </div>
        <div className='text-center'>
          <input type="submit" value="Send" className='bg-[#CA3961] p-3 rounded-lg text-white cursor-pointer w-6/12 hover:bg-inherit hover:border-2 hover:border-[#CA3961] hover:text-[#CA3961]' />
        </div>
      </form>
    </div>
  );
};

export default EmailContact;
