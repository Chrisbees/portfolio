import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqkum8a",
        "template_rskhr08",
        form.current,
        "aL7vejL6YCGXFsqYJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Strengths</h1>
        <p className="clientDesc">
          A person is a good as his strenths and also makes himself better by
          focusing on them while building his weaknesses. Below and few of my
          strengths:
        </p>
        <div className="clientImgs">
          <h4>Team Player</h4>
          <h4>Resilient</h4>
          <h4>Fast Learner</h4>
          <h4>Efficient</h4>
          <h4>Social</h4>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          {/*<div className="links">
            <img src="" alt="" className="link" />
            <img src="" alt="" className="link" />
            <img src="" alt="" className="link" />
            <img src="" alt="" className="link" />
  </div> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
