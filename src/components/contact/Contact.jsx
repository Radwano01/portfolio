import React from 'react';
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xxz75x2", "template_icn714m", e.target, "GuJn4gDLOPHyec_tK")
      .then((response) => {
        console.log("Email sent successfully!", response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
      e.target.reset()
  };

  return (
    <div className='contact' id='contact'>
      <div className="email-social">
        <form onSubmit={handleSubmit}>
          <h2>Send an Email</h2>
          <div>
            <input type="text" name="subject" required placeholder='Subject'/>
          </div>
          <div>
            <input type="name" name="name" required  placeholder='name'/>
          </div>
          <div>
            <input type="email" name="email" required placeholder='email'/>
          </div>
          <div><br />
            <textarea name="message" rows="15" required placeholder='message'/>
          </div>
          <button type="submit" className='contact-button'>Send</button>
        </form>
        <h3>or</h3>
        <br />
        <h4>My Email: www.radwaniq@gmail.com</h4>
      </div>
    </div>
  );
};

export default Contact;
