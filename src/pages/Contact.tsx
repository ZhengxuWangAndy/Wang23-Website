import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-page">
  <h1>Contact Me</h1>
  <p>Feel free to reach out by filling this form.</p>
  
  <form>
    <label>Name</label>
    <input type="text" placeholder="Your name" />

    <label>Email</label>
    <input type="email" placeholder="Your email" />

    <label>Message</label>
    <textarea placeholder="Write your message here..."></textarea>

    <button type="submit">Send Message</button>
  </form>

  <div className="contact-info">
    <p><strong>Email:</strong> youremail@example.com</p>
    <p><strong>Phone:</strong> +1 234 567 890</p>
  </div>
</section>

  );
};

export default Contact;
