import React from 'react'
import "./contact.scss"

export default function Contact() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = event.target.elements;
    console.log(email.value);
    console.log('Name:', name.value);
    console.log('Message:', message.value);
  }

  return (
    <div className='contact-form'>
      <p>Contact Me!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
