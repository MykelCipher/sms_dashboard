import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/auth';
import { UserCategory } from '../types/auth';
import LoginPage from './LoginPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredCategory?: UserCategory;
}

export default function ProtectedRoute({ children, requiredCategory }: ProtectedRouteProps) {
  const [user, setUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const handleLogin = (userCategory: UserCategory) => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (requiredCategory && user.category !== requiredCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}