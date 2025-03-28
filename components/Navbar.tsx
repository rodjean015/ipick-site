"use client"; // Required for using useState in Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Link from "next/link";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import router from "next/router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // New state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    title: string;
    address?: string;
    description?: string;
    hours?: string;
    image?: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  }>({
    title: "",
    address: "",
    description: "",
    hours: "",
    image: "",
    coordinates: {
      latitude: 14.5995, // Default to Manila
      longitude: 120.9842,
    },
  });

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

  // Function to open modal with location details
  const openLocationModal = (location: {
    title: string;
    address?: string;
    description?: string;
    hours?: string;
    image?: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  }) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "rgba(73, 73, 73, 0.36)",
          backdropFilter: "blur(5px)",
        }}
        className={`text-white p-4 fixed top-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <button onClick={() => handleScroll("home")}>
            <div className="bg-green-700 px-2 py-2 rounded-full transition">
              <Image
                src="/favicon.ico"
                alt="iPick Logo"
                width={30}
                height={30}
                priority
              />
            </div>
          </button>

          {/* Desktop Menu (Centered Links) */}
          <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <li className="hover:text-gray-300 font-semibold transition">
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Discover
              </button>
            </li>
            <Dropdown
              title="Locations"
              menuItems={[
                { label: "Area Availability", isHeader: true },
                {
                  label: "Metro Manila",
                  onClick: () =>
                    openLocationModal({
                      title: "Metro Manila",
                      address: "Various locations across Metro Manila",
                      description:
                        "Our service covers multiple districts in Metro Manila.",
                      hours: "Monday-Sunday: 8 AM - 8 PM",
                      coordinates: {
                        latitude: 14.5995,
                        longitude: 120.9842,
                      },
                    }),
                },
                {
                  label: "Tagaytay City",
                  onClick: () =>
                    openLocationModal({
                      title: "Tagaytay City",
                      address: "Tagaytay Highlands, Tagaytay City",
                      description:
                        "Serving the scenic Tagaytay area with our premium services.",
                      hours: "Monday-Sunday: 9 AM - 7 PM",
                      coordinates: {
                        latitude: 14.1096,
                        longitude: 120.9344,
                      },
                    }),
                },
                { label: "Office Locations", isHeader: true },
                {
                  label: "Quezon City - Main Office",
                  onClick: () =>
                    openLocationModal({
                      title: "Quezon City - Main Office",
                      address: "123 Main Street, Quezon City",
                      description:
                        "Our primary headquarters and central operations hub.",
                      hours: "Weekdays: 9 AM - 6 PM, Weekends: Closed",
                      coordinates: {
                        latitude: 14.6507,
                        longitude: 121.0388,
                      },
                    }),
                },
                {
                  label: "BGC - Satelite Office",
                  onClick: () =>
                    openLocationModal({
                      title: "BGC - Satellite Office",
                      address: "456 Corporate Plaza, BGC, Taguig",
                      description:
                        "Our satellite office in the heart of Bonifacio Global City.",
                      hours: "Weekdays: 8 AM - 5 PM, Weekends: By Appointment",
                      coordinates: {
                        latitude: 14.5547,
                        longitude: 121.0484,
                      },
                    }),
                },
                {
                  label: "Montalban Rizal",
                  onClick: () =>
                    openLocationModal({
                      title: "Montalban Rizal",
                      address: "789 Business Road, Montalban Rizal",
                      description: "Expanding our services to Montalban Rizal.",
                      hours: "Monday-Sunday: 10 AM - 6 PM",
                      coordinates: {
                        latitude: 14.6507,
                        longitude: 121.1854,
                      },
                    }),
                },
              ]}
            />
            <Dropdown
              title="Policies"
              menuItems={[
                {
                  label: "Privacy Policy",
                  onClick: () => (window.location.href = "/privacy-policy"),
                },
                {
                  label: "Code of Conduct",
                  onClick: () => (window.location.href = "/code-of-conduct"),
                },
                {
                  label: "Terms of Service",
                  onClick: () => (window.location.href = "/terms-of-service"),
                },
                {
                  label: "Discounts",
                  onClick: () => (window.location.href = "/discounts"),
                },
              ]}
            />
            <li className="hover:text-gray-300 font-semibold transition">
              <button
                onClick={() => {
                  window.location.href = "/help-centre";
                }}
              >
                Help Centre
              </button>
            </li>
          </ul>

          {/* "Be Our Partner" Button */}
          <Link
            href="https://portal.ipick.ph"
            className="hidden md:flex items-center gap-2 bg-green-700 text-gray-200 px-7 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-black transition-color duration-300"
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
          <div className="md:hidden text-white p-4 space-y-4 font-semibold">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <button
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Discover
                </button>
              </li>
              <Dropdown
                title="Locations"
                menuItems={[
                  { label: "Area Availability", isHeader: true },
                  {
                    label: "Metro Manila",
                    onClick: () =>
                      openLocationModal({
                        title: "Metro Manila",
                        address: "Various locations across Metro Manila",
                        description:
                          "Our service covers multiple districts in Metro Manila.",
                        hours: "Monday-Sunday: 8 AM - 8 PM",
                        coordinates: {
                          latitude: 14.6091,
                          longitude: 121.0223,
                        },
                      }),
                  },
                  {
                    label: "Tagaytay City",
                    onClick: () =>
                      openLocationModal({
                        title: "Tagaytay City",
                        address: "Tagaytay Highlands, Tagaytay City",
                        description:
                          "Serving the scenic Tagaytay area with our premium services.",
                        hours: "Monday-Sunday: 9 AM - 7 PM",
                        coordinates: {
                          latitude: 14.1096,
                          longitude: 120.9344,
                        },
                      }),
                  },
                  { label: "Office Locations", isHeader: true },
                  {
                    label: "Quezon City - Main Office",
                    onClick: () =>
                      openLocationModal({
                        title: "Quezon City - Main Office",
                        address: "123 Main Street, Quezon City",
                        description:
                          "Our primary headquarters and central operations hub.",
                        hours: "Weekdays: 9 AM - 6 PM, Weekends: Closed",
                        coordinates: {
                          latitude: 14.6507,
                          longitude: 121.0388,
                        },
                      }),
                  },
                  {
                    label: "BGC - Satelite Office",
                    onClick: () =>
                      openLocationModal({
                        title: "BGC - Satellite Office",
                        address: "456 Corporate Plaza, BGC, Taguig",
                        description:
                          "Our satellite office in the heart of Bonifacio Global City.",
                        hours:
                          "Weekdays: 8 AM - 5 PM, Weekends: By Appointment",
                        coordinates: {
                          latitude: 14.5547,
                          longitude: 121.0484,
                        },
                      }),
                  },
                  {
                    label: "Montalban Rizal",
                    onClick: () =>
                      openLocationModal({
                        title: "Montalban Rizal",
                        address: "789 Business Road, Montalban Rizal",
                        description:
                          "Expanding our services to Montalban Rizal.",
                        hours: "Monday-Sunday: 10 AM - 6 PM",
                        coordinates: {
                          latitude: 14.6507,
                          longitude: 121.1854,
                        },
                      }),
                  },
                ]}
              />
              <Dropdown
                title="Policies"
                menuItems={[
                  {
                    label: "Privacy Policy",
                    onClick: () => (window.location.href = "/privacy-policy"),
                  },
                  {
                    label: "Code of Conduct",
                    onClick: () => (window.location.href = "/code-of-conduct"),
                  },
                  {
                    label: "Terms of Service",
                    onClick: () => (window.location.href = "/terms-of-service"),
                  },
                  {
                    label: "Discounts",
                    onClick: () => (window.location.href = "/discounts"),
                  },
                ]}
              />
              <li>
                <button
                  onClick={() => {
                    window.location.href = "/help-centre";
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Help Centre
                </button>
              </li>
            </ul>

            {/* Mobile "Be Our Partner" Button */}
            <div className="text-center">
              <Link
                href="https://portal.ipick.ph"
                className="block w-full bg-green-700 text-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-black transition-color duration-300"
                onClick={() => setIsOpen(false)}
              >
                Be Our Partner
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        location={selectedLocation}
      />
    </>
  );
};

export default Navbar;
