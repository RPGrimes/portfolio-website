import "./contact.scss"

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="title">
        <p>Contact Me!</p>
      </div>
      <div className="emailForm">
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <input type='text' placeholder='Email'/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {/* {message && <span>Thank you for your message! I will reply as soon as possible.</span>} */}
        </form>
      </div>
    </div>
  )
}