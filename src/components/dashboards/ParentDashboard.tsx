import { Users, Calendar, Award, DollarSign } from 'lucide-react';
import { logout } from '../../utils/auth';

export default function ParentDashboard() {
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">EC</span>
          </div>
          <span className="font-poppins font-bold text-primary">EduCore - Parent Portal</span>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-primary mb-6">Parent Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">My Children</p>
                  <p className="text-2xl font-bold text-primary mt-1">2</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Upcoming Events</p>
                  <p className="text-2xl font-bold text-primary mt-1">5</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Average Grade</p>
                  <p className="text-2xl font-bold text-primary mt-1">A-</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Fees</p>
                  <p className="text-2xl font-bold text-primary mt-1">$450</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Welcome to Parent Portal</h2>
            <p className="text-gray-600">
              This is your parent dashboard where you can monitor your children's progress, communicate with teachers, and manage school-related activities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}