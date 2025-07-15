import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import StudentDashboard from './components/dashboards/StudentDashboard';
import ParentDashboard from './components/dashboards/ParentDashboard';
import LoginPage from './components/LoginPage';
import { getCurrentUser } from './utils/auth';

function App() {
  const user = getCurrentUser();

  return (
    <Router>
      <Routes>
        {/* Root route - redirect based on user status */}
        <Route 
          path="/" 
          element={
            user ? (
              <Navigate to={`/${user.category}/dashboard`} replace />
            ) : (
              <LoginPage onLogin={() => window.location.reload()} />
            )
          } 
        />
        
        {/* Dashboard routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requiredCategory="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/teacher/dashboard" 
          element={
            <ProtectedRoute requiredCategory="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/student/dashboard" 
          element={
            <ProtectedRoute requiredCategory="student">
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/parent/dashboard" 
          element={
            <ProtectedRoute requiredCategory="parent">
              <ParentDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;