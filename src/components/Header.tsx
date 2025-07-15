import { useState, useRef, useEffect } from 'react';
import { Bell, Menu, ChevronDown, LogOut, Key } from 'lucide-react';
import { logout } from '../utils/auth';

interface HeaderProps {
  onMenuClick: () => void;
  isMobile: boolean;
}

export default function Header({ onMenuClick, isMobile }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const handleResetPassword = () => {
    console.log('Reset password clicked');
    setDropdownOpen(false);
    // Add reset password logic here
  };

  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        )}
        {!isMobile && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-poppins font-bold text-primary">SchoolLogo</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-primary" />
          {(() => {
            const notifications = JSON.parse(localStorage.getItem('admin_notifications') || '[]');
            const unreadCount = notifications.filter((n: any) => !n.read).length;
            return unreadCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            ) : null;
          })()}
        </div>
        
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-medium text-sm text-primary">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
              <div className="py-1">
                <button
                  onClick={handleResetPassword}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Key className="w-4 h-4 mr-3" />
                  Reset Password
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}