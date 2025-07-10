import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
  Calendar,
  ClipboardCheck,
  TrendingUp,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Students' },
  { icon: UserCheck, label: 'Parents' },
  { icon: GraduationCap, label: 'Teachers' },
  { icon: Users, label: 'Users' },
  { icon: BookOpen, label: 'Academic' },
  { icon: Calendar, label: 'Attendance' },
  { icon: ClipboardCheck, label: 'Exam' },
  { icon: TrendingUp, label: 'Student Promotion' },
  { icon: Settings, label: 'Account' },
  { icon: Bell, label: 'Announcement' },
  { icon: ClipboardCheck, label: 'Report' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar({ isCollapsed, onToggle, isMobile, isOpen, onClose }: SidebarProps) {
  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
        )}
        <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-poppins font-bold text-primary">SchoolLogo</span>
            </div>
            <button onClick={onClose} className="p-1">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <nav className="p-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                  item.active
                    ? 'bg-secondary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </>
    );
  }

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-60'
    }`}>
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-poppins font-bold text-primary">SchoolLogo</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
              item.active
                ? 'bg-secondary text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title={isCollapsed ? item.label : ''}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}