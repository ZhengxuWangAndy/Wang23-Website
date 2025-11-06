import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

// Data for auto-rotating cards
const cardData = [
  {
    title: "Check out our ordering system demo",
    description: "Get a firsthand look at how a seamless online ordering experience can boost your business.",
    buttonText: "Demo",
    link: "#"
  },
  {
    title: "Meet our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    link: "#"
  },
  {
    title: "Check out our past work examples",
    description: "Browse our portfolio to see the stunning websites we've created for other successful restaurants.",
    buttonText: "Portfolio",
    link: "#"
  },
  {
    title: "Check out our past work examples",
    description: "Browse our portfolio to see the stunning websites we've created for other successful restaurants.",
    buttonText: "Portfolio",
    link: "#"
  },
  {
    title: "Check out our past work examples",
    description: "Browse our portfolio to see the stunning websites we've created for other successful restaurants.",
    buttonText: "Portfolio",
    link: "#"
  }
];

// Auto-rotating Cards Component
// Auto-rotating responsive Cards Component
const Cards = () => {
  const [pageIndex, setPageIndex] = useState(0); // current page (not raw card index)
  const [cardsPerView, setCardsPerView] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  });

  useEffect(() => {
    const onResize = () => {
      const newPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setCardsPerView(newPerView);
      setPageIndex(0); // reset to first page when layout changes
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pageCount = Math.ceil(cardData.length / cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pageCount);
    }, 3000);
   return () => clearInterval(interval);
  }, [pageCount, cardsPerView]);

  return (
    <div className="cards-container">
     <div className="cards-viewport">
        <div
          className="cards-carousel"
          style={{ transform: `translateX(-${pageIndex * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card-wrapper"
              style={{ flex: `0 0 ${100 / cardsPerView}%` }} // width per view
            >
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a href={card.link} className="card-link">
                  <button className="card-button">{card.buttonText}</button>
                </a>
              </div>
            </div>
          ))}
        </div>
+      </div>
    </div>
  );
};

// Differentiators Section
const differentiatorData = [
  { title: "Communication", percentage: "95%", description: "Our Clients say communication is seamless and proactive.", icon: "🤝" },
  { title: "Cutting-edge Technology", percentage: "40%", description: "Clients see up to 40% faster page load speeds than average restaurant sites.", icon: "💡" },
  { title: "Efficiency", percentage: "90%", description: "ROI achieved within the first 90 days for most clients.", icon: "📈" }
];

const DifferentiatorsSection = () => (
  <div className="differentiators-section">
    <a href="/schedule" className="consultation-button">
      <span className="consultation-button-text">
        Book a free<br />consultation
      </span>
    </a>

    <div className="differentiator-grid">
      {differentiatorData.map((d, index) => (
        <div key={index} className={`differentiator-card differentiator-card-bg-${index + 1}`}>
          <h3 className="differentiator-card-title">{d.title}</h3>
          <span className="differentiator-icon">{d.icon}</span>
          <p className="differentiator-card-percentage">{d.percentage}</p>
          <p className="differentiator-card-description">{d.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Home: React.FC = () => {

  return (
    <div className="home-container">
      {/* Original Hero Section */}
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

      {/* Original Steps Section */}
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
      {/* New Auto-Rotating Cards Section */}
      <Cards />

      {/* New Differentiators Section + Consultation Button */}
      <DifferentiatorsSection />
    </div>
  );
};

export default Home;