import { useState, useEffect } from "react";

// Data for the auto-rotating cards. Add new objects here to extend the carousel.
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
            <div className="card-content">
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

// Data for the differentiator cards. Emojis are used in place of react-icons.
const differentiatorData = [
  {
    title: "Communication",
    percentage: "95%",
    description: "Our Clients say communication is seamless and proactive.",
    icon: "🤝",
  },
  {
    title: "Cutting-edge Technology",
    percentage: "40%",
    description: "Clients see upto 40% faster page load speeds than average restaurant sites.",
    icon: "💡",
  },
  {
    title: "Efficiency",
    percentage: "90%",
    description: "ROI achieved within the first 90 days for most clients.",
    icon: "📈",
  }
];

// New component for the differentiator section.
const DifferentiatorsSection = () => {
  return (
    <div className="differentiators-section">
      {/* Consultation Button */}
      <a href="/schedule" className="consultation-button">
        <span className="consultation-button-text">
          Book a free<br />consultation
        </span>
      </a>

      {/* Main Heading */}
      <h2 className="differentiators-title">
        Wang23 is different, What sets Wang23 apart?
      </h2>

      {/* Differentiator Cards */}
      <div className="differentiator-grid">
        {differentiatorData.map((differentiator, index) => (
          <div key={index} className={`differentiator-card differentiator-card-bg-${index + 1}`}>
            <h3 className="differentiator-card-title">
              {differentiator.title}
            </h3>
            {/* icon placed below the title and centered */}
            <span className="differentiator-icon" aria-hidden="true">{differentiator.icon}</span>
            <p className="differentiator-card-percentage">
              {differentiator.percentage}
              {differentiator.title !== 'Efficiency' && <span className="differentiator-card-percent-symbol"></span>}
            </p>
            <p className="differentiator-card-description">
              {differentiator.description}
            </p>
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
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap');
        
        /* Basic Styles */
        .home-container {
          background-color: #f7f9fc;
          color: #333;
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
        }
        
        .section {
          padding: 1.5rem 1rem;
          text-align: center;
        }
        
        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          color: #2c3e50;
          position: relative;
          animation: fadeIn 1s ease-in-out;
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background-color: #e74c3c;
          margin: 1rem auto 0;
          border-radius: 2px;
        }
        
        .section-paragraph {
          font-size: 1.1rem;
          color: #666;
          max-width: 45rem;
          margin: 0 auto 1.5rem;
          animation: fadeInUp 1s ease-in-out;
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
        }
        
        .hero-overlay {
          position: relative;
          z-index: 1;
          padding: 2.5rem;
          border-radius: 1.5rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          animation: scaleIn 1.5s ease-out;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          animation: textClip 2s cubic-bezier(0.8, 0, 0.2, 1) forwards;
        }
        
        .hero-subtitle {
          font-size: clamp(1.25rem, 4vw, 2rem);
          color: #e0e0e0;
          animation: fadeInUp 1.5s ease-in-out 0.5s both;
        }
        
        /* Sections with different backgrounds */
        .why-choose-us-section,
        .what-makes-us-different-section {
          background-color: #f7f9fc;
        }
        
        /* Feature Cards */
        .feature-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }
        
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          padding: 1.5rem;
          border-radius: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 24rem;
          transform: translateY(0);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          animation: fadeInUp 1s ease-in-out;
          aspect-ratio: 1 / 1;
          
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          animation: bounce 1s infinite;
        }
        
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #34495e;
        }
        
        .feature-description {
          color: #666;
          text-align: center;
        }
        
        /* Key Features Section */
        .why-choose-us-section,
        .what-makes-us-different-section,
        .key-features-section {
          background: #e9f0f7;
        }
        
        .features-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .features-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .feature-item {
          background-color: #fff;
          padding: 0.75rem; /* Decreased padding further */
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          height: 80%;
          width: 85%;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .feature-item-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #34495e;
        }
        
        .feature-item-description {
          color: #666;
          font-size: 1.2em;
        }
        
        /* Auto-rotating Cards */
        .auto-rotating-cards-section {
          background-color: #f7f9fc;
        }
        
        .cards-carousel {
          display: flex;
          transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-wrapper {
          flex-shrink: 0;
          width: 100%;
          padding: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .card-wrapper {
            width: 33.333333%;
          }
        }
        
        .card-content {
          padding: 1.5rem;
          height: 100%;
          border-radius: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          transform: scale(1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          background-color: #eaf3ff; /* This is the new change */
        }
        
        .card-content:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #34495e;
        }
        
        .card-description {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        
        .card-button {
          padding: 0.7rem 1.5rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(45deg, #3498db, #2980b9);
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
          border: none;
          cursor: pointer;
          letter-spacing: 0.5px;
        }
        
        .card-button:hover {
          background: linear-gradient(45deg, #2980b9, #3498db);
          transform: translateY(-2px);
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes textClip {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        /* New styles for the Differentiators section */
        
        .differentiators-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 1rem;
          background-color: #f7f9fc;
        }
        
        @media (min-width: 640px) {
          .differentiators-section {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
        
        /* New button design */
        .consultation-button {
          display: inline-block;
          /* decreased vertical padding (height) and increased horizontal padding (width) */
          padding: 0.9rem 3.5rem;
          border-radius: 2rem;
          /* interior stays white, outer border shows a gradient */
          border: 5px solid transparent;
          background-image:
            linear-gradient(#ffffff, #ffffff), /* inner (fills inside) */
            linear-gradient(90deg, #53a7ff 0%, #9b7cf3 42%, #c86bff 100%); /* border gradient */
          background-origin: border-box;
          background-clip: padding-box, border-box;
          min-width: 14rem; /* ensure wider button */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
          transition: all 0.25s ease;
          text-decoration: none;
          text-align: center;
        }
        
        .consultation-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.12);
        }
        
        .consultation-button-text {
          display: inline-block;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
          /* text uses same gradient as border */
          background-image: linear-gradient(90deg, #53a7ff 0%, #9b7cf3 42%, #c86bff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        
        @media (min-width: 640px) {
          .consultation-button-text {
            font-size: 1.5rem;
          }
        }
        
        /* Differentiators Heading */
        .differentiators-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          color: #1f2937;
          margin-bottom: 3rem;
        }
        
        @media (min-width: 640px) {
          .differentiators-title {
            font-size: 2.5rem;
          }
        }
        
        /* Differentiator Cards Grid */
        .differentiator-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
          max-width: 72rem;
        }
        
        @media (min-width: 768px) {
          .differentiator-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        
        /* Differentiator Cards */
        .differentiator-card {
          display: flex;
          flex-direction: column;
          align-items: center; /* center content horizontally */
          text-align: center;
           padding: 1.5rem;
           border-radius: 1rem;
           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
           transform: scale(1);
           transition: transform 0.3s ease-in-out;
         }
         
         .differentiator-card:hover {
           transform: scale(1.05);
         }
         
         .differentiator-card-bg-1 {
           background-color: #dbeafe;
         }
         
         .differentiator-card-bg-2 {
           background-color: #bfdbfe;
         }
         
         .differentiator-card-bg-3 {
           background-color: #93c5fd;
         }
         
         .differentiator-card-title {
           font-size: 1.5rem;
           font-weight: 700;
           color: #1f2937;
           margin-bottom: 0; /* reset to let .differentiator-icon control spacing */
         }
         
         .differentiator-icon {
           font-size: 2.5rem;
           /* equal vertical gap above and below the icon */
           margin: 0.5rem 0;
           line-height: 1;
           display: inline-block;
           /* emoji-friendly font fallbacks */
           font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Segoe UI Symbol", sans-serif;
         }
         
         .differentiator-card-percentage {
           display: inline-block;
           font-size: 2.25rem;
           font-weight: 900;
           /* match the vertical gap used for the icon so spacing feels balanced */
           margin: 0.5rem 0 0.5rem 0;
           /* gradient text + transparent fill */
           background-image: linear-gradient(90deg, #53a7ff 0%, #9b7cf3 42%, #c86bff 100%);
           -webkit-background-clip: text;
           background-clip: text;
           -webkit-text-fill-color: transparent;
           color: transparent;
           /* glow + subtle scale animation to highlight */
           text-shadow: 0 6px 18px rgba(99, 102, 241, 0.06);
           transform-origin: center;
           animation: highlightPulse 2s ease-in-out infinite;
         }
         
         @keyframes highlightPulse {
           0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
           50% { transform: scale(1.06); filter: drop-shadow(0 10px 30px rgba(139,92,246,0.12)); }
         }
         
         @media (min-width: 640px) {
           .differentiator-card-percentage {
             font-size: 3rem;
           }
         }
         
         .differentiator-card-percent-symbol {
           font-size: 1.875rem;
           font-weight: 900;
           color: #2563eb;
         }
         
         .differentiator-card-description {
           color: #4b5563;
           font-size: 1rem;
           margin-top: 0.5rem; /* keep same vertical rhythm below percentage */
         }
        `}
      </style>
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
          <strong>experiences</strong>. We use carefully chosen color
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

      {/* New Differentiators Section */}
      <DifferentiatorsSection />
    </div>
  );
};

export default Home;
