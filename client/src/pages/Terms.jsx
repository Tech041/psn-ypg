import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="w-full min-h-screen pt-40">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">Effective Date: July 29, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            Welcome to YPG Job portal. By accessing or using our website and
            services, you agree to comply with these Terms and Conditions.
            Please read them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Eligibility and Accounts
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must be at least 18 years old to use this service.</li>
            <li>
              You are a registered Pharmacist with Pharmacists society of
              Nigeria (PCN)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Use of Service</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Our platform is designed to connect job seekers and employers. We
              do not guarantee employment.
            </li>
            <li>
              You agree not to misuse the service, including spamming, scraping,
              or posting fraudulent jobs.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-gray-700">
            Your use of the service is also governed by our{" "}
            <Link
              onClick={() => scrollTo(0, 0)}
              to="/privacy"
              className="text-blue-600 underline"
            >
              Privacy Policy
            </Link>
            , which explains how we collect and use your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            We are not liable for indirect, incidental, or consequential damages
            arising from your use of the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Termination</h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate accounts that violate
            these Terms or applicable laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about these Terms, please whatsapp us at:{" "}
            <span className="font-medium">08030507512</span>
          </p>
        </section>
      </div>
    </main>
  );
};
export default Terms;
