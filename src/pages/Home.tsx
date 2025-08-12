import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Building Beautiful Websites for Restaurants</h1>
        <p className="tagline">Your vision, our expertise — crafting websites that bring your restaurant’s story to life.</p>

        <button className="btn-primary">See How We Can Help</button>

        <div className="intro">
          <h2>Elevate Your Restaurant’s Online Presence</h2>
          <p>
            A professionally designed website can turn casual browsers into loyal diners. 
            We create intuitive, appetizing websites tailored specifically for restaurants — showcasing menus, ambiance, and seamless booking experiences.
          </p>
        </div>

        <div className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Interactive Menu Integration</li>
            <li>Online Reservation System</li>
            <li>Mobile-Optimized Design</li>
            <li>Photo Galleries & Virtual Tours</li>
            <li>Social Media & Review Integration</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Ready to Transform Your Restaurant’s Website?</h2>
          <p>Contact us today to discuss how we can help you create a stunning online presence that attracts more customers.</p>
          <button className="btn-secondary">Get in Touch</button>

        </div>
      </div>
    </section>
  );
};

export default Home;
