import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Hello!</h1>
        <p>We are Wang23, and we make</p>
        <p>it as easy as 1-2-3.</p>
      </div>
      <button className="cta-button">Get Started</button>

      <div className="service-row">
        <div className="section-header">
          <h2>Here's <span className="accent-blue">what</span> we do</h2>
        </div>
        <div className="cards-grid">
          <div className="card">
            <h3>Custom Websites</h3>
          </div>
          <div className="card">
            <h3>Ordering Systems</h3>
          </div>
        </div>
      </div>

      <div className="service-row reverse">
        <div className="cards-grid">
          <div className="card">
            <h3><span className="text-gray">Creativity</span> + <span className="text-bold">Technology</span></h3>
          </div>
          <div className="card">
            <h3 className="text-bold">Client-Centered</h3>
          </div>
        </div>
        <div className="section-header">
          <h2>And <span className="accent-purple">how</span> we do it</h2>
        </div>
      </div>

      <div className="steps-content">
        <div className="steps-row">
          <div className="steps-header">
            <h2>Just <span className="accent-purple">three</span> easy steps</h2>
          </div>
          
          <div className="steps-list">
            <div className="step-item">
              <span className="step-number blue">1.</span>
              <h3 className="blue">Discover - Share your ideas and goals with us</h3>
            </div>
            <div className="step-item">
              <span className="step-number dark-purple">2.</span>
              <h3 className="dark-purple">Design & Build - We create tailored solutions with creativity and precision</h3>
            </div>
            <div className="step-item">
              <span className="step-number purple">3.</span>
              <h3 className="purple">Deliver & Grow - Launch, optimize and scale your digital presence</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;