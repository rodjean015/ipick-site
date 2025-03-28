"use client";

import { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Matches fade-out duration
    }, 1500); // Loader visible for 1.5s
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-500 z-50 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Spinner Animation */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500"></div>
        <span className="mt-4">Bringing you in...</span>
      </div>
    </div>
  );
};

export default Loader;
