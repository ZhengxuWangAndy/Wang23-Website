import React from 'react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => (
  <section className="testimonials">
    <h1>What Our Clients Say</h1>
    <blockquote>
      “MyCompany transformed our business with their expert solutions. Highly recommended!”
      <footer>- Jane Doe, CEO of Acme Corp</footer>
    </blockquote>
    <blockquote>
      “Professional, reliable, and innovative. A pleasure to work with.”
      <footer>- John Smith, CTO of Tech Solutions</footer>
    </blockquote>
  </section>
);

export default Testimonials;
