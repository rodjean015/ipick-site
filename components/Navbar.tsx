"use client"; // Required for using useState in Next.js App Router

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiUser, FiX, FiChevronDown } from "react-icons/fi"; // Ensure react-icons is installed
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth Scroll Function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.36)",
        backdropFilter: "blur(5px)",
      }}
      className={`text-white p-4 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <button onClick={() => handleScroll("home")}>
          <div className="bg-white px-2 py-2 rounded-full transition">
            {/* White background with padding */}
            <Image
              src="/favicon.ico" // Replace with your actual logo path
              alt="iPick Logo"
              width={30} // Adjust width as needed
              height={30} // Adjust height as needed
              priority // Ensures fast loading
            />
          </div>
        </button>

        {/* Desktop Menu (Centered Links) */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-gray-300 font-semibold transition"
            >
              About
            </button>
          </li>
          <Dropdown
            title="Locations"
            menuItems={[
              { label: "Area Availability", isHeader: true },
              { label: "Metro Manila" },
              { label: "Tagaytay City" },
              { label: "Office Locations", isHeader: true },
              { label: "Quezon City - Main Office" },
              { label: "BGC - Satelite Office" },
              { label: "Montalban Rizal" },
            ]}
          />
          <Dropdown
            title="Policies"
            menuItems={[
              { label: "Privacy Policy" },
              { label: "Code of Conduct" },
              { label: "Terms of Service" },
              { label: "Coupon & Discounts" },
            ]}
          />
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-gray-300 font-semibold transition"
            >
              Help Centre
            </button>
          </li>
        </ul>

        {/* "Be Our Partner" Button */}
        <Link
          href="https://portal.ipick.ph"
          className="hidden md:flex items-center gap-2 bg-green-700 text-gray-200 px-7 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-black transition"
        >
          <FiUser className="text-xl" /> Be Our Partner
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden text-white p-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-white hover:text-gray-300"
              >
                About
              </button>
            </li>
            <Dropdown
              title="Locations"
              menuItems={[
                { label: "Area Availability", isHeader: true },
                { label: "Metro Manila" },
                { label: "Tagaytay City" },
                { label: "Office Locations", isHeader: true },
                { label: "Quezon City - Main Office" },
                { label: "BGC - Satelite Office" },
                { label: "Montalban Rizal" },
              ]}
            />
            <Dropdown
              title="Policies"
              menuItems={[
                { label: "Privacy Policy" },
                { label: "Code of Conduct" },
                { label: "Terms of Service" },
                { label: "Coupon & Discounts" },
              ]}
            />
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-white hover:text-gray-300"
              >
                Help Centre
              </button>
            </li>
          </ul>

          {/* Mobile "Be Our Partner" Button */}
          <div className="text-center">
            <Link
              href="/driver"
              className="block w-full bg-gray-700 text-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Be Our Partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
