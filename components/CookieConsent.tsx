"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = Cookies.get("cookie_consent") || localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 }); // Store in cookies
    localStorage.setItem("cookie_consent", "accepted"); // Fallback for users blocking cookies
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center opacity-0 animate-fade-in"
        role="alert"
        aria-live="polite"
      >
        {/* Cookie Message */}
        <p className="text-sm flex-1">
          We use cookies to enhance your experience.{" "}
          <a
            href="/privacy-policy"
            className="underline text-blue-400 hover:text-blue-500"
            aria-label="Read more about our privacy policy"
          >
            Learn More
          </a>
        </p>

        {/* Button Container */}
        <div className="flex items-center mt-6">
          <button
            onClick={handleAccept}
            className="bg-green-700 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition duration-300 ml-4"
            aria-label="Accept cookies"
          >
            Accept
          </button>

          <button
            onClick={handleClose}
            className="ml-2 bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition duration-300"
            aria-label="Decline cookies"
          >
            Decline
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
