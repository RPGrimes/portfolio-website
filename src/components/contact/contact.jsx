import "./contact.scss"
import { useForm } from 'react-hook-form';

export default function Contact() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="contact" id="contact">
      <div className="title">
        <p>Contact Me!</p>
      </div>
      <div className="emailForm">
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='email' name="userEmail" {...register("email", {required: true})} placeholder='Email' maxLength='80' required/>
        <textarea name='message' {...register("message")} placeholder="Message" maxLength='1000' required></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}