export interface User {
  username: string;
  category: UserCategory;
  token: string;
}

export type UserCategory = 'admin' | 'teacher' | 'student' | 'parent';

export interface LoginCredentials {
  username: string;
  password: string;
  category: UserCategory;
  rememberMe: boolean;
}

export interface ForgotPasswordRequest {
  username: string;
  category: UserCategory;
}

export interface Notification {
  id: string;
  type: 'password-reset' | 'general';
  message: string;
  timestamp: Date;
  read: boolean;
}