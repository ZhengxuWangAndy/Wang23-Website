import React from "react";
import "../styles/TermsOfService.css";

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <p>
        Welcome to <strong>Our Company</strong>. We specialize in creating
        professional websites for restaurants. By using our services, you agree
        to the following terms and conditions.
      </p>

      <h2>Use of Services</h2>
      <p>
        Our services are designed exclusively for restaurants and related
        businesses. You agree to provide accurate information during the project
        lifecycle.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All designs, code, and solutions created remain the intellectual
        property of <strong>Our Company</strong> until the final payment is
        completed.
      </p>

      <h2>Payment Terms</h2>
      <ul>
        <li>50% advance payment is required to start a project</li>
        <li>Remaining balance is due upon completion</li>
        <li>Delays in payment may pause project delivery</li>
      </ul>

      <h2>Limitations of Liability</h2>
      <p>
        While we ensure high-quality development, we are not liable for losses
        caused by third-party integrations or external hosting providers.
      </p>

      <h2>Contact</h2>
      <p>
        For any queries regarding these terms, reach us at{" "}
        <a href="mailto:support@ourcompany.com">support@ourcompany.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
