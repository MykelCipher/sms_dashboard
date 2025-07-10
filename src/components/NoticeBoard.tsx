import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting',
    date: '2024-01-15',
    time: '10:00 AM',
    type: 'meeting'
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    date: '2024-01-20',
    time: '9:00 AM',
    type: 'event'
  },
  {
    id: 3,
    title: 'Mid-term Examinations',
    date: '2024-01-25',
    time: '8:00 AM',
    type: 'exam'
  },
  {
    id: 4,
    title: 'Science Fair Registration',
    date: '2024-01-30',
    time: '2:00 PM',
    type: 'registration'
  },
  {
    id: 5,
    title: 'Winter Break Announcement',
    date: '2024-02-05',
    time: '12:00 PM',
    type: 'announcement'
  }
];

export default function NoticeBoard() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-green-100 text-green-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'registration': return 'bg-yellow-100 text-yellow-800';
      case 'announcement': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-poppins font-bold text-lg text-primary mb-4">Notice Board</h3>
      
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {notices.map((notice) => (
          <div key={notice.id} className="border-l-4 border-secondary pl-4 py-2 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-primary text-sm">{notice.title}</h4>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{notice.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{notice.time}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notice.type)}`}>
                {notice.type}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-secondary text-sm font-medium hover:text-secondary/80 transition-colors">
        View All Notices
      </button>
    </div>
  );
}