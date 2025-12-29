import React from "react";

const Contact = () => {
  return (
    <main className="w-full min-h-screen pt-40">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or need support? Reach out to us using contact details.
        </p>

        {/* Contact Details */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              
              <span className="font-medium">
                 WhatsApp: +2348030507512
              </span>
            </li>
            <li>
              📞 Phone: <span className="font-medium">+2348030507512</span>
            </li>
            <li>
              📍 Address: <span className="font-medium">Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contact;
