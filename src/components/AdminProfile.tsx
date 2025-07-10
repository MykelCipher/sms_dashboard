import React from 'react';
import { User, Clock, Shield, ExternalLink } from 'lucide-react';

export default function AdminProfile() {
  const handleViewFullProfile = () => {
    console.log('Navigating to full profile page');
    // Add navigation logic here
    // For example: navigate('/profile')
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-poppins font-bold text-lg text-primary mb-4">Admin Profile</h3>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">JD</span>
        </div>
        <div>
          <h4 className="font-poppins font-bold text-primary">John Doe</h4>
          <p className="text-gray-600 text-sm">System Administrator</p>
          <div className="flex items-center space-x-1 mt-1">
            <Shield className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600">Active</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Employee ID</span>
          <span className="font-medium text-primary">ADM001</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Department</span>
          <span className="font-medium text-primary">Administration</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Last Login</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <span className="font-medium text-primary">Today, 9:30 AM</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleViewFullProfile}
        className="w-full mt-4 bg-secondary text-white py-2 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-1"
      >
        <span>View Full Profile</span>
        <ExternalLink className="w-3 h-3" />
      </button>
    </div>
  );
}