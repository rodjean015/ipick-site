"use client"; // Needed for state management in Next.js App Router
import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  label: string;
  isHeader?: boolean;
  onClick?: () => void; // Add optional onClick handler
}

interface DropdownProps {
  title: string;
  menuItems: MenuItem[];
  onLocationSelect?: (location: any) => void; // Optional prop for modal interaction
}

const Dropdown: React.FC<DropdownProps> = ({ title, menuItems, onLocationSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu item click
  const handleItemClick = (item: MenuItem) => {
    // If the item has an onClick handler, call it
    if (item.onClick) {
      item.onClick();
    }

    // Close the dropdown
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onMouseEnter={() => setIsOpen(true)} // Open on hover
        onMouseLeave={() => setIsOpen(false)} // Close on hover out
        className="flex items-center hover:text-gray-300 font-semibold transition"
      >
        {title} {isOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Start hidden & slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible
            exit={{ opacity: 0, y: -10 }} // Animate out
            transition={{ duration: 0.2, ease: "easeOut" }} // Smooth transition
            className="absolute left-0 mt-2 w-56 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden"
            onMouseEnter={() => setIsOpen(true)} // Keep open when hovered
            onMouseLeave={() => setIsOpen(false)} // Close when hover out
          >
            <ul className="py-2">
              {menuItems.map((item, index) =>
                item.isHeader ? (
                  <li key={index} className="px-4 py-2 font-semibold text-green-700 cursor-default">
                    {item.label}
                  </li>
                ) : (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.label}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
