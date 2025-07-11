import { useState } from 'react';
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
  X,
  ChevronDown,
  ChevronUp,
  School,
  FileText,
  Building,
  UserPlus,
  Clock,
  Award,
  BarChart3,
  FileBarChart,
  Target,
  Shield,
  Cog,
  CalendarDays,
  PartyPopper,
  Plane,
  GraduationCap as GradeCap,
  Calculator,
  DollarSign,
  BookOpenCheck,
  Globe
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

interface SubItem {
  label: string;
  icon: any;
}

interface MenuItem {
  icon: any;
  label: string;
  active?: boolean;
  subItems?: SubItem[];
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Students' },
  { icon: UserCheck, label: 'Parents' },
  { icon: GraduationCap, label: 'Teachers' },
  { icon: Users, label: 'Users' },
  { 
    icon: BookOpen, 
    label: 'Academic',
    subItems: [
      { label: 'Class', icon: School },
      { label: 'Subject', icon: BookOpenCheck },
      { label: 'Department', icon: Building }
    ]
  },
  { 
    icon: Calendar, 
    label: 'Attendance',
    subItems: [
      { label: 'Student', icon: UserPlus },
      { label: 'Teacher', icon: GraduationCap }
    ]
  },
  { 
    icon: ClipboardCheck, 
    label: 'Exam',
    subItems: [
      { label: 'Create Exam', icon: FileText },
      { label: 'Exam Schedule', icon: CalendarDays },
      { label: 'Grade', icon: Award },
      { label: 'Exam Attendance', icon: Clock }
    ]
  },
  { icon: TrendingUp, label: 'Student Promotion' },
  { icon: Settings, label: 'Account' },
  { 
    icon: Bell, 
    label: 'Announcement',
    subItems: [
      { label: 'Notice', icon: FileText },
      { label: 'Event', icon: PartyPopper },
      { label: 'Holiday', icon: Plane }
    ]
  },
  { 
    icon: BarChart3, 
    label: 'Report',
    subItems: [
      { label: 'Class Report', icon: School },
      { label: 'Student Report', icon: Users },
      { label: 'Exam Schedule Report', icon: CalendarDays },
      { label: 'Attendance Report', icon: Clock },
      { label: 'Terminal Performance Report', icon: Target },
      { label: 'Student Session Report', icon: FileBarChart },
      { label: 'Fee Report', icon: DollarSign },
      { label: 'Account Ledger Report', icon: Calculator }
    ]
  },
  { 
    icon: Cog, 
    label: 'Settings',
    subItems: [
      { label: 'Academic Year', icon: CalendarDays },
      { label: 'Assign Role/Privilege', icon: Shield },
      { label: 'Mark Setting', icon: GradeCap },
      { label: 'General Setting', icon: Globe }
    ]
  },
];

export default function Sidebar({ isCollapsed, onToggle, isMobile, isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    if (isCollapsed && !isMobile) return;
    
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems.includes(item.label);

    return (
      <div key={index}>
        <div
          className={`flex items-center justify-between px-3 py-3 rounded-lg mb-1 transition-all duration-200 cursor-pointer ${
            item.active
              ? 'bg-secondary text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
          }`}
          onClick={() => hasSubItems && toggleExpanded(item.label)}
          title={isCollapsed && !isMobile ? item.label : ''}
        >
          <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {(!isCollapsed || isMobile) && <span className="font-medium">{item.label}</span>}
          </div>
          {hasSubItems && (!isCollapsed || isMobile) && (
            <div className="ml-auto">
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
        
        {hasSubItems && isExpanded && (!isCollapsed || isMobile) && (
          <div className="ml-8 mb-2 space-y-1">
            {item.subItems!.map((subItem, subIndex) => (
              <div
                key={subIndex}
                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-800 rounded-lg cursor-pointer transition-all duration-200"
              >
                <subItem.icon className="w-4 h-4 flex-shrink-0" />
                <span>{subItem.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

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
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <nav className="p-4 overflow-y-auto h-full">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </nav>
        </div>
      </>
    );
  }

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 h-screen sticky top-0 ${
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
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      
      <nav className="p-4 overflow-y-auto h-full">
        {menuItems.map((item, index) => renderMenuItem(item, index))}
      </nav>
    </div>
  );
}