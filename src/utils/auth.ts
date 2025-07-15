import { User, LoginCredentials, UserCategory } from '../types/auth';

// Test credentials
const TEST_CREDENTIALS = {
  admin: { username: 'admin', password: '12345' },
  teacher: { username: 'teacher', password: '12345' },
  student: { username: 'student', password: '12345' },
  parent: { username: 'parent', password: '12345' }
};

export const authenticateUser = (credentials: LoginCredentials): User | null => {
  const testCred = TEST_CREDENTIALS[credentials.category];
  
  if (testCred.username === credentials.username && testCred.password === credentials.password) {
    const user: User = {
      username: credentials.username,
      category: credentials.category,
      token: generateToken()
    };
    
    if (credentials.rememberMe) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      localStorage.setItem('educore_user', JSON.stringify({ ...user, expiry: expiryDate.toISOString() }));
    } else {
      sessionStorage.setItem('educore_user', JSON.stringify(user));
    }
    
    return user;
  }
  
  return null;
};

export const getCurrentUser = (): User | null => {
  // Check localStorage first (remember me)
  const storedUser = localStorage.getItem('educore_user');
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    if (new Date(userData.expiry) > new Date()) {
      return { username: userData.username, category: userData.category, token: userData.token };
    } else {
      localStorage.removeItem('educore_user');
    }
  }
  
  // Check sessionStorage
  const sessionUser = sessionStorage.getItem('educore_user');
  if (sessionUser) {
    return JSON.parse(sessionUser);
  }
  
  return null;
};

export const logout = (): void => {
  localStorage.removeItem('educore_user');
  sessionStorage.removeItem('educore_user');
};

export const getDashboardRoute = (category: UserCategory): string => {
  return `/${category}/dashboard`;
};

const generateToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const addPasswordResetNotification = (username: string, category: UserCategory): void => {
  const notifications = JSON.parse(localStorage.getItem('admin_notifications') || '[]');
  const newNotification = {
    id: generateToken(),
    type: 'password-reset',
    message: `Password reset request from ${category}: ${username}`,
    timestamp: new Date().toISOString(),
    read: false
  };
  
  notifications.unshift(newNotification);
  localStorage.setItem('admin_notifications', JSON.stringify(notifications));
};