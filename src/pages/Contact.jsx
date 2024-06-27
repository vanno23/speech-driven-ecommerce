import React, { useEffect, useState } from "react";
import "./Contact.css";
import mailImage from "../images/mail.png";
import callImage from "../images/call.png";
import annyang from "annyang";
import VoiceNavigation from "../VoiceNavigation";

const Contact = () => {
  const [filledInputs, setFilledInputs] = useState([]);

  useEffect(() => {
    const commands = {
      "select name": () => {
        document.getElementById("fullname").focus();
      },
      // "select email": () => {
      //   document.getElementById("email").focus();
      // },
      "select subject": () => {
        document.getElementById("subject").focus();
      },
      "select order number": () => {
        document.getElementById("ordernumber").focus();
      },
      "select message": () => {
        document.getElementById("message").focus();
      },
      "check privacy policy": () => {
        const privacyPolicyCheckbox = document.getElementById("privacy-policy");
        if (privacyPolicyCheckbox) {
          privacyPolicyCheckbox.checked = true;
          updateFilledInputs("privacy-policy");
        }
      },
      "write *text": (text) => {
        const inputField = document.activeElement;
        inputField.value = text;
        updateFilledInputs(inputField.id);
      },
      send: () => {
        handleSubmit();
      },
    };

    annyang.addCommands(commands);
    annyang.addCallback("result", (phrases) => {
      console.log("Recognized speech:", phrases[0]);
    });
    annyang.start();

    const inputs = document.querySelectorAll(
      "input[required], textarea[required]"
    );
    inputs.forEach((input) => {
      input.addEventListener("input", handleInputChange);
    });

    return () => {
      annyang.removeCommands();
      annyang.abort();
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInputChange);
      });
    };
  }, [filledInputs]);

  const handleInputChange = (event) => {
    const inputName = event.target.id;
    if (!filledInputs.includes(inputName)) {
      setFilledInputs([...filledInputs, inputName]);
    }
  };

  const updateFilledInputs = (inputName) => {
    if (!filledInputs.includes(inputName)) {
      setFilledInputs([...filledInputs, inputName]);
    }
  };

  const handleSubmit = () => {
    const allInputs = document.querySelectorAll(
      "input[required], textarea[required], input[type='checkbox']"
    );
    const filledInputs = Array.from(allInputs).filter(
      (input) => input.checked || input.value.trim()
    );
    if (filledInputs.length === allInputs.length) {
      alert("Form is filled. Sending...");
    } else {
      alert("Please fill all required fields before sending.");
    }
  };

  return (
    <div className="contact-container">
      <VoiceNavigation />
      <h1>Contact Us</h1>
      <div className="contact-top">
        <p>
          We always love hearing from our customers! Please do not hesitate to
          contact us should you have any questions regarding our products and
          sizing recommendations or inquiries about your current order.
        </p>
        <p>
          Contact our Customer Care Team through the contact form below, email
          us at hello@mail.com or live chat with us via our chat widget on the
          bottom right hand corner of this page.
        </p>
        <p>We will aim to respond to you within 1-2 business days.</p>
      </div>

      <div className="form-container">
        <h1>
          <span>
            <img src={mailImage} alt="" />
          </span>
          Write Us
        </h1>
        <h2>Your Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" id="fullname" required />
          </div>
          {/* <div className="input-group">
            <input type="email" placeholder="Email" id="email" required />
          </div> */}
          <div className="input-group">
            <input type="text" placeholder="Subject" id="subject" required />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Order Number"
              id="ordernumber"
              required
            />
          </div>
          <div className="input-group">
            <textarea placeholder="Message" id="message" required></textarea>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="privacy-policy" />
            <label htmlFor="privacy-policy">
              I have read and understood the contact us privacy and policy.
            </label>
          </div>
          <div className="button-group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>

      <div className="contact-methods">
        <div className="method">
          <img src={callImage} alt="" />
          <h3>Call Us</h3>
          <p>We're here to talk to you</p>
          <p className="info">555 123 456</p>
        </div>
        <div className="method">
          <img src={mailImage} alt="" />
          <h3>Email Us</h3>
          <p>You are welcome to send us an email</p>
          <p className="info">hello@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
