import "./contact.scss"
import { useForm } from 'react-hook-form';
import React from 'react';
import * as emailjs from "emailjs-com";
require('dotenv').config()

export default function Contact() {

  const { register, watch, errors } = useForm();
  
  // const onSubmit = data => console.log(data)

  const handleSubmit = (e) => {
      //prevents the page from reloading after submission of the form
      e.preventDefault();

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID, 
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            alert("Message successfully sent. You should hear back from me in the not too distant future!", result.text);
          },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          }
        )
        //clears the form after sending the email
        e.target.reset();
    };


  return (
    <div className="contact" id="contact">
      <div className="title">
        <p>Contact Me!</p>
      </div>
      <div className="emailForm">
      <form id='contact-form' onSubmit={handleSubmit}>
        <input type='userEmail' name="userEmail" {...register("userEmail", {required: true})} placeholder='Email' maxLength='80' required/>
        <textarea name='userMessage' {...register("userMessage")} placeholder="Message" maxLength='1000' required></textarea>
          <button type='submit'>Send</button>
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></script>
          <script type="text/javascript">
            (function() {emailjs.init(process.env.REACT_APP_USER_ID)})();
          </script>
        </form>
      </div>
    </div>
  )
}