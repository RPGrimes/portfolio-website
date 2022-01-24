import "./contact.scss"
import { useForm } from 'react-hook-form';
import * as emailjs from "emailjs-com";

export default function Contact() {

  const { register } = useForm();

  const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_c7b4zra', 
          'template_ugo6pje',
          e.target,
          'user_0R4pq21tsStNeVXZXYv6H'
        )
        .then(
          (result) => {
            alert("Message successfully sent. You should hear back from me in the not too distant future!", result.text);
          },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          }
        )
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