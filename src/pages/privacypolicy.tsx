// src/pages/privacypolicy.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-24">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 text-white bg-gradient-sunset hover:bg-gradient-sunset transition rounded-md"
      >
        ← Back to Home
      </button>

      <div className="textOrange max-w-7xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-sunset mb-6 text-center">
          Privacy Policy
        </h1>

        {/* Section */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-sunset">
            Introduction
          </h2>
          <p>
            At Global Journey, safeguarding the confidentiality and integrity of your
            personal data is a vital responsibility. We always process personal
            information in accordance with the General Data Protection Regulation
            (EU) 2016/679 (GDPR) and other applicable laws. This policy outlines
            our approach to protecting the information you entrust to us.
          </p>

          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-sunset">
            Data Collection and Purpose
          </h2>
          <p>
            To fulfil our travel services contract with you, we require contact
            details for your authorized users. In providing our services, you may
            also share personal data about your clients or customers, including
            child or special category data (for example, health needs or
            disabilities).
          </p>

          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-sunset">
            Principles of Fair Processing
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Using data lawfully, fairly, and transparently</li>
            <li>Collecting data only for legitimate, clearly explained purposes</li>
            <li>Ensuring data is relevant and limited only to what is necessary</li>
            <li>Keeping data accurate and updated</li>
            <li>Retaining data only as long as necessary</li>
            <li>Securing personal data using appropriate measures</li>
          </ul>
          <p>
            We will only process personal information (including special category
            data) when there is a lawful basis to do so and always in accordance
            with your instructions. We do not engage in automated decision-making
            with your data. The principal lawful basis for our processing is the
            performance of our contract to deliver travel services.
          </p>

          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-sunset">
            Your Responsibilities as Data Controller
          </h2>
          <p>
            As the Data Controller, you are responsible for notifying your
            clients/customers that their data may be provided to and processed by
            Global Journey and its authorized partners, and for obtaining all
            necessary consents.
          </p>

          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-sunset">
            Communications and Mailing Lists
          </h2>
          <p>
            The personal data of authorized users may be added to our mailing
            lists to deliver service updates, newsletters and event invitations
            relevant to your business by phone, mail or email. This is part of our
            service commitment and legitimate interest in keeping you informed.
          </p>
          <p>
            You or your authorized users may opt out of these communications at
            any time by contacting us at{" "}
            <a
              href="mailto:sales@globaljourney.net"
              className="text-blue-600 underline"
            >
              sales@globaljourney.net
            </a>
            .
          </p>
        </section>

     
      </div>
    </div>
  );
};

export default PrivacyPolicy;
