import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-poppins font-bold text-xl">SchoolLogo</span>
            </div>
            <p className="text-gray-300 text-sm">
              Excellence in Education Since 1985
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-bold text-lg mb-3">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">info@schoollogo.edu</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-bold text-lg mb-3">Quick Links</h4>
            <div className="space-y-1">
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">About Us</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">Academic Programs</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">Admissions</a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 SchoolLogo. All rights reserved. | Designed with excellence in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}