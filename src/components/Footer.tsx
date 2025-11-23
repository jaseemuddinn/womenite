import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="womenite logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold">womenite</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building a stronger tomorrow by empowering women today through education, health access, and skill training.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/womenite" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-[#fd8f45] cursor-pointer" />
              </a>
              <a href="https://x.com/womenite" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-[#fd8f45] cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/womenite/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-[#fd8f45] cursor-pointer" />
              </a>
              <a href="https://linkedin.com/company/womenite" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#fd8f45] cursor-pointer" />
              </a>
              <a href="https://youtube.com/c/womenitee" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-[#fd8f45] cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#fd8f45]">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-[#fd8f45]">Programs</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-[#fd8f45]">Our Partners</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-[#fd8f45]">News & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#fd8f45]">Contact</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-[#fd8f45]">Volunteer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#fd8f45]" />
                <span className="text-gray-300">+91 97179 73658</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#fd8f45]" />
                <span className="text-gray-300">Hr@womenite.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#fd8f45] mt-1" />
                <a 
                  href="https://g.co/kgs/3BLxjsP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#fd8f45] transition-colors cursor-pointer"
                >
                  <div>Plot No 12, Vardhman Plaza, 225</div>
                  <div>Rd Number 44, Pitampura</div>
                  <div>New Delhi, Delhi 110034</div>
                  <div>India</div>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Trust & Recognition</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">FCRA Registration: 231662059</p>
              <p className="text-sm text-gray-300">80G Certificate Available</p>
              <p className="text-sm text-gray-300">CSR Partner Certified</p>
            </div>
            <div className="mt-4">
              {/* <p className="text-xs text-gray-400">
                Awarded "Best Women Empowerment NGO" 2023
              </p> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
            © {new Date().getFullYear()} womenite. All rights reserved. Building dreams, changing lives.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
