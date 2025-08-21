import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>Our Company</strong>, we specialize in building modern,
        high-performing websites for restaurants. Protecting your privacy is a
        priority for us. This Privacy Policy outlines how we collect, use, and
        safeguard your data.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Personal details such as name, email, and phone number</li>
        <li>Business information about your restaurant</li>
        <li>Technical data (browser type, device, IP address)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use collected data to:</p>
      <ul>
        <li>Deliver tailored website solutions for restaurants</li>
        <li>Improve user experience on our platform</li>
        <li>Communicate updates, offers, and support</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement strict security measures to ensure your data is protected
        from unauthorized access or misuse.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, you can contact us at{" "}
        <a href="mailto:support@ourcompany.com">support@ourcompany.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
