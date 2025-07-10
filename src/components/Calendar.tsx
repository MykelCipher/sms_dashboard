import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === currentDate;
    const hasEvent = [5, 12, 18, 25].includes(day); // Sample event days
    
    days.push(
      <div
        key={day}
        className={`w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer transition-colors ${
          isToday
            ? 'bg-secondary text-white font-bold'
            : hasEvent
            ? 'bg-secondary/20 text-secondary font-medium'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins font-bold text-lg text-primary">Calendar</h3>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="font-medium text-sm text-gray-700">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="w-8 h-8 flex items-center justify-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center space-x-2 text-xs text-gray-600">
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
          <span>Events</span>
        </div>
      </div>
    </div>
  );
}