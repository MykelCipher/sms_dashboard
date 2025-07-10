import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm flex-wrap">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-4 text-sm flex-wrap">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-gray-300">info@schoollogo.edu</span>
                </div>
              </div>
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