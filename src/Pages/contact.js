import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/contact.css';

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact - Ahmad Hassaan';
  }, []);

  const validateEmail = (email) => {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(
      'service_bb31q5t',
      'template_pov9xxj',
      form.current,
      'D-z8DFrr-l-yGS2W1'
    ).then(
      (result) => {
        setIsSent(true);
        form.current.reset();
      },
      (error) => {
        alert('❌ Failed to send message. Try again.');
        console.log(error.text);
      }
    ).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div id='contact-page'>
      <div id='my-contact'>
        <div id='envelope'>
          <i className="bi bi-envelope"></i>
        </div>
        <h3>Get in Touch</h3>
        <h4>Let's Work Together</h4>
      </div>

      <div className="my-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder='Full Name'
            name="user_name"
            id="name-contact"
            required
          />
          <br />
          <input
            type="email"
            placeholder='Email'
            name="user_email"
            id="name-contact"
            required
          />
          <br />
          <input
            type="number"
            placeholder='Phone Number'
            name="user_phone"
            id="name-contact"
          />
          <br />
          <textarea
            placeholder='Message'
            name="message"
            id="message-box"
            required
          ></textarea>
          <br />
          <button type="submit" id='btt' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* ✅ Show Thank You Message */}
        {isSent && (
          <p style={{ marginTop: '15px', color: 'green', fontWeight: 'bold' }}>
            ✅ Thank you for getting in touch! I’ll reply soon.
          </p>
        )}

        <br /><br /><br />
      </div>
      <div id="footer">
        <p id='copy'>© 2025 Ahmad Hassaan, Inc. All Rights Reserved  <a id="privacy" href="#!" onClick={(e) => e.preventDefault()}>Privacy |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Terms |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
