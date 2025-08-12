import React from 'react';
import '../styles/FAQ.css';

const FAQ: React.FC = () => (
  <section className="faqs">
    <h1>Frequently Asked Questions</h1>
    <dl>
      <dt>What services do you offer?</dt>
      <dd>We offer a range of tech consulting and development services tailored to your needs.</dd>

      <dt>How can I schedule a meeting?</dt>
      <dd>You can schedule a meeting through our Schedule page or contact us directly.</dd>

      <dt>Where are you located?</dt>
      <dd>Our headquarters are in City, Country, but we serve clients globally.</dd>
    </dl>
  </section>
);

export default FAQ;
