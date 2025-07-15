import { useState, useEffect } from 'react';
import { Users, UserCheck, GraduationCap, BookOpen } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import SummaryCard from './SummaryCard';
import Calendar from './Calendar';
import NoticeBoard from './NoticeBoard';
import AdminProfile from './AdminProfile';
import Footer from './Footer';

export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const summaryData = [
    {
      title: 'Total Students',
      value: '1,234',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Parents',
      value: '856',
      icon: UserCheck,
      color: 'bg-green-500'
    },
    {
      title: 'Total Teachers',
      value: '89',
      icon: GraduationCap,
      color: 'bg-purple-500'
    },
    {
      title: 'Total Subjects',
      value: '24',
      icon: BookOpen,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onMenuClick={() => setMobileMenuOpen(true)}
        isMobile={isMobile}
      />
      
      <div className="flex flex-1">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          isMobile={isMobile}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
        
        <main className={`flex-1 p-4 transition-all duration-300 ${
          isMobile ? 'ml-0' : sidebarCollapsed ? 'sidebar-collapsed-spacing' : 'sidebar-spacing'
        }`}>
          <div className="max-w-7xl mx-auto ml-1">
            <div className="mb-6">
              <h1 className="font-poppins font-bold text-2xl text-primary mb-2">
                Admin Dashboard Overview
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening at your school today.
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {summaryData.map((item, index) => (
                <SummaryCard
                  key={index}
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  color={item.color}
                />
              ))}
            </div>

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Calendar />
              </div>
              
              <div className="lg:col-span-1">
                <NoticeBoard />
              </div>
              
              <div className="lg:col-span-1">
                <AdminProfile />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}