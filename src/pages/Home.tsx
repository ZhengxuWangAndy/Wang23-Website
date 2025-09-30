import { useState, useEffect } from "react";
import "../styles/Home.css"; // Import your CSS

// Data for the auto-rotating cards
const cardData = [
  {
    title: "Check out our ordering system demo",
    description: "Get a firsthand look at how a seamless online ordering experience can boost your business.",
    buttonText: "Demo",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    link: "#"
  },
  {
    title: "Check out our past work examples",
    description: "Browse our portfolio to see the stunning websites we've created for other successful restaurants.",
    buttonText: "Blog",
    link: "#"
  }
];

// Auto-rotating Cards Component
const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cards-container">
      <div 
        className="cards-carousel" 
        style={{ transform: `translateX(-${currentIndex * (100 / cardData.length)}%)` }}
      >
        {cardData.map((card, index) => (
          <div key={index} className="card-wrapper">
            <div className="card-content">
              <div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              <a href={card.link} className="card-link">
                <button className="card-button">{card.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Differentiators Section
const differentiatorData = [
  { title: "Communication", percentage: "95%", description: "Our Clients say communication is seamless and proactive.", icon: "🤝" },
  { title: "Cutting-edge Technology", percentage: "40%", description: "Clients see upto 40% faster page load speeds than average restaurant sites.", icon: "💡" },
  { title: "Efficiency", percentage: "90%", description: "ROI achieved within the first 90 days for most clients.", icon: "📈" }
];

const DifferentiatorsSection = () => (
  <div className="differentiators-section">
    <a href="/schedule" className="consultation-button">
      <span className="consultation-button-text">
        Book a free<br />consultation
      </span>
    </a>

    <h2 className="differentiators-title">
      Wang23 is different, What sets Wang23 apart?
    </h2>

    <div className="differentiator-grid">
      {differentiatorData.map((d, index) => (
        <div key={index} className={`differentiator-card differentiator-card-bg-${index + 1}`}>
          <h3 className="differentiator-card-title">{d.title}</h3>
          <span className="differentiator-icon">{d.icon}</span>
          <p className="differentiator-card-percentage">
            {d.percentage}{d.title !== "Efficiency" && <span className="differentiator-card-percent-symbol"></span>}
          </p>
          <p className="differentiator-card-description">{d.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Main Home Component
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/restaurant-team-concept-uniform-group-catering-service-characters-chef-cook-waiters-barman-welcoming-banner-vector-98397911.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Building Beautiful Websites for Restaurants</h1>
          <p className="hero-subtitle">
            Your vision, our expertise — crafting websites that bring your restaurant’s story to life.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="section introduction-section">
        <h2 className="section-title">Elevate Your Restaurant’s Online Presence</h2>
        <p className="section-paragraph">
          A professionally designed website can turn casual browsers into loyal diners...
        </p>
        <p className="section-paragraph">
          Whether you own a cozy café, a fine-dining restaurant, or a fast-food outlet...
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="section why-choose-us-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card"><span className="feature-icon">🎯</span><h3 className="feature-title">Restaurant-Focused Expertise</h3><p className="feature-description">We specialize in building websites exclusively for restaurants and food businesses.</p></div>
          <div className="feature-card"><span className="feature-icon">👥</span><h3 className="feature-title">Customer-Centric Design</h3><p className="feature-description">Every element is designed to help customers find you, explore your menu, and make reservations easily.</p></div>
          <div className="feature-card"><span className="feature-icon">🚀</span><h3 className="feature-title">Conversion-Oriented Approach</h3><p className="feature-description">From mouth-watering visuals to optimized layouts, everything is crafted to drive more bookings.</p></div>
        </div>
      </div>

      {/* Key Features */}
      <div className="section key-features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-list">
          {/* Feature Items */}
        </div>
      </div>

      {/* Auto-rotating Cards */}
      <div className="section auto-rotating-cards-section">
        <h2 className="section-title">Ready to Transform Your Restaurant’s Website?</h2>
        <div className="cards-wrapper"><Cards /></div>
      </div>

      {/* Differentiators Section */}
      <DifferentiatorsSection />
    </div>
  );
};

export default Home;
