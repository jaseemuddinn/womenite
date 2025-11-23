import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsLearnDropdownOpen(false);
  };

  // Handle dropdown toggle with auto-close others
  const toggleDropdown = (dropdownName: string) => {
    closeAllDropdowns();
    switch (dropdownName) {
      case 'about':
        setIsAboutDropdownOpen(true);
        break;
      case 'learn':
        setIsLearnDropdownOpen(true);
        break;
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    closeAllDropdowns();
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Partners', path: '/partners' },
    { name: 'Impact Stories', path: '/impact-stories' },
    { name: 'Documents', path: '/documents' },
    // { name: 'Events', path: '/events' },
    // { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutUsItems = [
    { name: 'About Us Overview', path: '/about' },
    { name: 'Our Journey', path: '/our-journey' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const learnWithUsItems = [
    { name: 'Gender Equality', path: '/learn/gender-equality' },
    { name: 'Child Sexual Abuse Prevention', path: '/learn/child-abuse-prevention' },
    { name: 'Menstrual Hygiene', path: '/learn/menstrual-hygiene' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAboutUsActive = () => location.pathname === '/about' || location.pathname === '/our-journey' || location.pathname === '/testimonials';
  const isLearnWithUsActive = () => location.pathname.startsWith('/learn');

  return (
    <header ref={headerRef} className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="womenite logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">Womenite</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#fd8f45] border-b-2 border-[#fd8f45] pb-1'
                    : 'text-gray-700 hover:text-[#fd8f45]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  if (isAboutDropdownOpen) {
                    closeAllDropdowns();
                  } else {
                    toggleDropdown('about');
                  }
                }}
                className={`font-medium transition-colors flex items-center ${
                  isAboutUsActive()
                    ? 'text-[#fd8f45] border-b-2 border-[#fd8f45] pb-1'
                    : 'text-gray-700 hover:text-[#fd8f45]'
                }`}
              >
                About Us
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    {aboutUsItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#fd8f45] transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Learn With Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  if (isLearnDropdownOpen) {
                    closeAllDropdowns();
                  } else {
                    toggleDropdown('learn');
                  }
                }}
                className={`font-medium transition-colors flex items-center ${
                  isLearnWithUsActive()
                    ? 'text-[#fd8f45] border-b-2 border-[#fd8f45] pb-1'
                    : 'text-gray-700 hover:text-[#fd8f45]'
                }`}
              >
                Learn With Us
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isLearnDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLearnDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/learn"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#fd8f45] transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Learn With Us Overview
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    {learnWithUsItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#fd8f45] transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#fd8f45]'
                    : 'text-gray-700 hover:text-[#fd8f45]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* About Us Section */}
            <div className="border-t pt-4 mt-4">
              <div className="font-medium text-gray-700 py-2">About Us</div>
              <div className="ml-4">
                {aboutUsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#fd8f45]'
                        : 'text-gray-600 hover:text-[#fd8f45]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Learn With Us Section */}
            <div className="border-t pt-4 mt-4">
              <Link
                to="/learn"
                className={`block py-2 font-medium transition-colors ${
                  isActive('/learn')
                    ? 'text-[#fd8f45]'
                    : 'text-gray-700 hover:text-[#fd8f45]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Learn With Us
              </Link>
              <div className="ml-4 mt-2">
                {learnWithUsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#fd8f45]'
                        : 'text-gray-600 hover:text-[#fd8f45]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
