import React from "react";
import "./App.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_i98b6ir",
      "template_kbzcfwg",
      form.current,
      "bkNznNlmrmH2U0Nvb"
    );

    e.target.reset();
  };

  return (
    <div id="contact" className="contact-bottom">
      <div className="space"></div>

      <div className="container contact__container contact__container-1">
        <div className="title-div">
          <h1 className="titles">Ask me any questions you might have.</h1>
        </div>
        <Zoom left>
          <div className="email-container">
            <a
              className="btn btn-outline-dark email"
              href="https://www.linkedin.com/in/karan-singh-267472203"
              target="_blank"
            >
              <MdOutlineEmail />
              Linkedln
            </a>
            <a
              className="btn btn-outline-dark email"
              href="https://github.com/karan353?tab=repositories"
              target="_blank"
            >
              <MdOutlineEmail />
              GitHub
            </a>
            <a
              className="btn btn-outline-dark email"
              href="mailto:karan.singh1269@gmail.com"
              target="_blank"
            >
              <MdOutlineEmail />
              Email
            </a>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="name"
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="email"
              required
            />
            <textarea
              className="contact-input"
              name="message"
              rows="7"
              placeholder="message"
              required
            ></textarea>

            <button type="submit" class="btn btn-outline-dark">
              Send
            </button>
          </form>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
