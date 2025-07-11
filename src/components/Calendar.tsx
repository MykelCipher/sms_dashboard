import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Sample events for different months
  const eventDays: { [key: string]: number[] } = {
    '2024-0': [5, 12, 18, 25], // January
    '2024-1': [3, 14, 21, 28], // February
    '2024-2': [7, 15, 22, 29], // March
    '2024-3': [4, 11, 18, 25], // April
    '2024-4': [2, 9, 16, 23, 30], // May
    '2024-5': [6, 13, 20, 27], // June
    '2024-6': [4, 11, 18, 25], // July
    '2024-7': [1, 8, 15, 22, 29], // August
    '2024-8': [5, 12, 19, 26], // September
    '2024-9': [3, 10, 17, 24, 31], // October
    '2024-10': [7, 14, 21, 28], // November
    '2024-11': [5, 12, 19, 26], // December
  };

  const currentEventDays = eventDays[`${currentYear}-${currentMonth}`] || [];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setCurrentDate(newDate);
  };

  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;
    const hasEvent = currentEventDays.includes(day);
    
    days.push(
      <div
        key={day}
        className={`w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer transition-colors ${
          isToday
            ? 'bg-secondary text-white font-bold'
            : hasEvent
            ? 'bg-secondary/20 text-secondary font-medium hover:bg-secondary/30'
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
          <button 
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            onClick={() => navigateMonth('prev')}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="font-medium text-sm text-gray-700 min-w-[120px] text-center">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button 
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            onClick={() => navigateMonth('next')}
          >
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
          <span>Events ({currentEventDays.length} this month)</span>
        </div>
      </div>
    </div>
  );
}