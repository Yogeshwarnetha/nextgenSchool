// components/Navbar.jsx
"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, BookOpen, Images, Phone, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Menu items
  const menuItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#' },
    { name: 'About School', icon: <Info size={20} />, href: '#' },
    { name: 'Academics', icon: <BookOpen size={20} />, href: '#' },
    { name: 'Activities', icon: <Images size={20} />, href: '#' },
    { name: 'Gallery', icon: <Images size={20} />, href: '#' },
    { name: 'Contact', icon: <Phone size={20} />, href: '#' },
    { name: 'Admissions', icon: <UserPlus size={20} />, href: '#', isHighlighted: true },
  ];

  // Marquee announcements
  const announcements = [
    "🎓 Admission Open for 2024-25 Academic Year",
    "🏆 Our School Ranked #1 in District Academic Performance",
    "📅 Parent-Teacher Meeting Scheduled for March 25, 2024",
    "🚀 STEM Fair 2024 Registrations Now Open",
    "🏫 School Reopens on June 1, 2024 After Summer Break"
  ];

  return (
    <>
      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {announcements.map((announcement, index) => (
              <span key={index} className="mx-8 inline-block">
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/school new Logo.png"
                  alt="School Logo"
                  className="h-28 w-28 object-contain"
                />
               
              </div>
            </div>

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${item.isHighlighted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Hidden on desktop */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ maxWidth: '320px' }}
        >
          <div className="flex flex-col h-full">
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <img
                  src="/school new Logo.png"
                  alt="School Logo"
                  className="h-8 w-8 rounded-full object-cover bg-white border border-gray-200 shadow-sm"
                />
                <span className="ml-2 font-bold text-gray-800">Bright Future</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg mx-2 transition-all ${item.isHighlighted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* School Contact Info in Mobile Menu */}
              <div className="mt-8 px-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-2">School Hours</h3>
                  <p className="text-sm text-gray-600">Mon - Fri: 8:00 AM - 3:30 PM</p>
                  <p className="text-sm text-gray-600">Sat: 9:00 AM - 12:00 PM</p>
                  
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h3 className="font-bold text-gray-800 mb-2">Contact Info</h3>
                    <p className="text-sm text-gray-600">📞 (123) 456-7890</p>
                    <p className="text-sm text-gray-600">✉️ info@brightfuture.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
      
      {/* CSS for marquee animation */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
        }
        
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 25s linear infinite;
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee-content {
            animation: marquee 30s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-content {
            animation: marquee 40s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;