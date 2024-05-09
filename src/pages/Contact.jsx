import React from "react";
import "./Contact.css";
import mailImage from "../images/mail.png";
import callImage from "../images/call.png";

const Contact = () => {
  return (
    <div class="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-top">
        <p>We always love hearing from our customers! Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.</p>
        <p>Contact our Customer Care Team through the contact form below, email us at hello@mail.com or live chat with us via our chat widget on the bottom right hand corner of this page.</p>
        <p>We will aim to respond to you within 1-2 business days.</p>
      </div>

      <div class="form-container">
        <h1><span><img src={mailImage} alt="" /></span>Write Us</h1>
        <h2>Your Information</h2>
        <form action="#">
            <div class="input-group">
                <input type="text" placeholder="Full Name" id="fullname" required />
            </div>
            <div class="input-group">
                <input type="email" placeholder="Email" id="name" required />
            </div>
            <div class="input-group">
                <input type="text" placeholder="Subject" id="subject" required />
            </div>
            <div class="input-group">
                <input type="text" placeholder="Order Number" id="ordernumber" />
            </div>
            <div class="input-group">
                <textarea placeholder="Message" id="message" required></textarea>
            </div>
            <div class="checkbox-group">
                <input type="checkbox" id="privacy-policy" />
                <label for="privacy-policy">I have read and understood the contact us privacy and policy.</label>
            </div>
            <div class="button-group">
                <button type="submit">Send</button>
            </div>
        </form>
      </div>

      <div class="contact-methods">
        <div class="method">
          <img src={callImage} alt="" />
          <h3>Call Us</h3>
          <p>We're here to talk to you</p>
          <p className="info">555 123 456</p>
        </div>
        <div class="method">
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
