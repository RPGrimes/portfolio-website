import "./contact.scss"
import { useForm } from 'react-hook-form';

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="title">
        <p>Contact Me!</p>
      </div>
      <div className="emailForm">
        <form>
          <input type='email' name="userEmail" placeholder='Email'/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}