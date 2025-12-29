import React from "react";

const Privacy = () => {
  return (
    <main className="w-full min-h-screen pt-40">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Effective Date: July 29, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            YPG Job Portal values your privacy. This Privacy Policy explains how
            we collect, use, and protect your information when you use our
            website and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              and account details when you register.
            </li>
            <li>
              <strong>Job-related Information:</strong> CVs, resumes, job
              applications, and postings.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and cookies.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To provide and improve our job portal services.</li>
            <li>To connect job seekers with employers.</li>
            <li>
              To send important updates, notifications, or promotional offers.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p className="text-gray-700">
            We use cookies and similar technologies to enhance your browsing
            experience, analyze traffic, and personalize content. You can manage
            cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
          <p className="text-gray-700">
            We do not sell your personal information. We may share data with
            trusted third-party providers (e.g., payment processors, analytics
            tools) only to deliver our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, whatsapp  us at:{" "}
            <span className="font-medium">08030507512</span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
