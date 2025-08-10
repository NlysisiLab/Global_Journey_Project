import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookNow = () => {
    setIsMenuOpen(false);

    // Dispatch custom event for Contact.tsx (or similar) to listen
    window.dispatchEvent(new Event("openPlanningTrip"));

    toast({
      title: "Ready to book?",
      description: "Please fill out the contact form below to start planning your adventure!",
    });
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Your Logo</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <button
            onClick={handleBookNow}
            className=" text-white px-4 py-2 rounded bg-gradient-sunset"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-100">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About</a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-100">Services</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
          <button
            onClick={handleBookNow}
            className="w-full text-left px-4 py-2 text-white bg-gradient-sunset"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
