import { useState, useEffect } from "react";
import '../styles/Home.css';

// Data for the auto-rotating cards. Add new objects here to extend the carousel.
const cardData = [
  {
    title: "Check out our ordering system demo",
    description: "Get a firsthand look at how a seamless online ordering experience can boost your business.",
    buttonText: "Demo",
    bgColor: "bg-blue-100",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    bgColor: "bg-blue-200",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    bgColor: "bg-blue-200",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    bgColor: "bg-blue-200",
    link: "#"
  },
  {
    title: "Check out our team",
    description: "Learn about the passionate people behind our beautiful web designs and why we're the right partners for you.",
    buttonText: "About",
    bgColor: "bg-blue-200",
    link: "#"
  },
  {
    title: "Check out our past work examples",
    description: "Browse our portfolio to see the stunning websites we've created for other successful restaurants.",
    buttonText: "Blog",
    bgColor: "bg-blue-300",
    link: "#"
  }
];

// This component handles the auto-rotation and rendering of the cards.
const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval for auto-rotation.
    const interval = setInterval(() => {
      // Loop back to the first card after reaching the end.
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000); // Rotates every 3 seconds
    
    // Clear the interval when the component unmounts.
    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div className="cards-container">
      <div 
        className="cards-carousel" 
        style={{ transform: `translateX(-${currentIndex * (100 / cardData.length)}%)` }}
      >
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="card-wrapper"
          >
            <div className={`card-content ${card.bgColor}`}>
              <div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              <a href={card.link} className="card-link">
                <button className="card-button">
                  {card.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// The main Home component containing all the content for the home page.
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/restaurant-team-concept-uniform-group-catering-service-characters-chef-cook-waiters-barman-welcoming-banner-vector-98397911.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="hero-title">
            Building Beautiful Websites for Restaurants
          </h1>
          <p className="hero-subtitle">
            Your vision, our expertise — crafting websites that bring your
            restaurant’s story to life.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="section introduction-section">
        <h2 className="section-title">
          Elevate Your Restaurant’s Online Presence
        </h2>
        <p className="section-paragraph">
          A professionally designed website can turn casual browsers into loyal
          diners. We create intuitive, appetizing websites tailored specifically
          for restaurants — showcasing menus, ambiance, and seamless booking
          experiences.
        </p>
        <p className="section-paragraph">
          Whether you own a cozy café, a fine-dining restaurant, or a fast-food
          outlet, we design websites that highlight what makes your brand
          unique. Our focus is on delivering a modern, visually appealing, and
          easy-to-use digital experience for your guests.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="section why-choose-us-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3 className="feature-title">Restaurant-Focused Expertise</h3>
            <p className="feature-description">We specialize in building websites exclusively for restaurants and food businesses.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3 className="feature-title">Customer-Centric Design</h3>
            <p className="feature-description">Every element is designed to help customers find you, explore your menu, and make reservations easily.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚀</span>
            <h3 className="feature-title">Conversion-Oriented Approach</h3>
            <p className="feature-description">From mouth-watering visuals to optimized layouts, everything is crafted to drive more bookings.</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="section key-features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">🍴</span>
            <h3 className="feature-item-title">Interactive Menu Integration</h3>
            <p className="feature-item-description">Showcase your dishes with images, prices, and categories.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📅</span>
            <h3 className="feature-item-title">Online Reservation System</h3>
            <p className="feature-item-description">Allow customers to book a table instantly.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <h3 className="feature-item-title">Mobile-Optimized Design</h3>
            <p className="feature-item-description">Ensure your website looks stunning on all devices.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🖼️</span>
            <h3 className="feature-item-title">Photo Galleries & Virtual Tours</h3>
            <p className="feature-item-description">Highlight your ambiance and signature dishes.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌐</span>
            <h3 className="feature-item-title">Social Media & Review Integration</h3>
            <p className="feature-item-description">Connect with your community and build trust.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-item-title">Fast & Secure Hosting</h3>
            <p className="feature-item-description">Optimized performance for speed and security.</p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="section what-makes-us-different-section">
        <h2 className="section-title">
          What Makes Our Websites Different?
        </h2>
        <p className="section-paragraph">
          Our restaurant websites are not just about design — they are about
          creating <strong>experiences</strong>. We use carefully chosen color
          palettes, typography, and layouts that match your brand’s vibe. Every
          page is structured to <strong>engage visitors</strong>, encourage
          reservations, and increase customer loyalty.
        </p>
        <p className="section-paragraph">
          We also provide SEO-friendly content and integration with Google Maps,
          delivery apps, and review platforms like Yelp & TripAdvisor, making it
          easier for new customers to discover you.
        </p>
      </div>

      {/* Auto-rotating Cards */}
      <div className="section auto-rotating-cards-section">
        <h2 className="section-title">
          Ready to Transform Your Restaurant’s Website?
        </h2>
        <div className="cards-wrapper">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
