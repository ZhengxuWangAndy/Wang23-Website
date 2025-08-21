import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";


const Home: React.FC = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-restaurant.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Building Beautiful Websites for Restaurants
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your vision, our expertise — crafting websites that bring your
            restaurant’s story to life.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Elevate Your Restaurant’s Online Presence
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          A professionally designed website can turn casual browsers into loyal
          diners. We create intuitive, appetizing websites tailored specifically
          for restaurants — showcasing menus, ambiance, and seamless booking
          experiences.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you own a cozy café, a fine-dining restaurant, or a fast-food
          outlet, we design websites that highlight what makes your brand
          unique. Our focus is on delivering a modern, visually appealing, and
          easy-to-use digital experience for your guests.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-section">
        <h2 className="why-choose-title why-choose-title-left">Why Choose Us?</h2>
        <div className="why-choose-cards-row">
          <div className="why-choose-card">
            <span className="why-choose-card-icon why-choose-card-icon-expert">🎯</span>
            <div className="why-choose-card-content">
              <div className="why-choose-card-title">Restaurant-Focused Expertise</div>
              <div className="why-choose-card-desc">We specialize in building websites exclusively for restaurants and food businesses.</div>
            </div>
          </div>
          <div className="why-choose-card">
            <span className="why-choose-card-icon why-choose-card-icon-customer">👥</span>
            <div className="why-choose-card-content">
              <div className="why-choose-card-title">Customer-Centric Design</div>
              <div className="why-choose-card-desc">Every element is designed to help customers find you, explore your menu, and make reservations easily.</div>
            </div>
          </div>
          <div className="why-choose-card">
            <span className="why-choose-card-icon why-choose-card-icon-conversion">🚀</span>
            <div className="why-choose-card-content">
              <div className="why-choose-card-title">Conversion-Oriented Approach</div>
              <div className="why-choose-card-desc">From mouth-watering visuals to optimized layouts, everything is crafted to drive more bookings.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="features-modern-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-menu">🍴</div>
            <div className="feature-title">Interactive Menu Integration</div>
            <div className="feature-desc">Showcase your dishes with images, prices, and categories.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-reservation">📅</div>
            <div className="feature-title">Online Reservation System</div>
            <div className="feature-desc">Allow customers to book a table instantly.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-mobile">📱</div>
            <div className="feature-title">Mobile-Optimized Design</div>
            <div className="feature-desc">Ensure your website looks stunning on all devices.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-gallery">🖼️</div>
            <div className="feature-title">Photo Galleries & Virtual Tours</div>
            <div className="feature-desc">Highlight your ambiance and signature dishes.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-social">🌐</div>
            <div className="feature-title">Social Media & Review Integration</div>
            <div className="feature-desc">Connect with your community and build trust.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-hosting">⚡</div>
            <div className="feature-title">Fast & Secure Hosting</div>
            <div className="feature-desc">Optimized performance for speed and security.</div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">
          What Makes Our Websites Different?
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
          Our restaurant websites are not just about design — they are about
          creating <strong>experiences</strong>. We use carefully chosen color
          palettes, typography, and layouts that match your brand’s vibe. Every
          page is structured to <strong>engage visitors</strong>, encourage
          reservations, and increase customer loyalty.
        </p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          We also provide SEO-friendly content and integration with Google Maps,
          delivery apps, and review platforms like Yelp & TripAdvisor, making it
          easier for new customers to discover you.
        </p>
      </div>

      {/* Call to Action */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-restaurant.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Restaurant’s Website?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">
            Your restaurant deserves more than just a basic website — it
            deserves a <strong>digital identity</strong> that reflects your
            passion, cuisine, and hospitality.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/Contact" className="center-button-link">
              <button className="center-button">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;