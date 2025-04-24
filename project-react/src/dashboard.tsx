import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session/local storage or auth tokens
    localStorage.clear();

    // Navigate to login and replace the current history entry
    navigate('/login', { replace: true });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f1f2f6',
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '600',
        color: '#3478f6',
        marginBottom: '20px',
      }}>
        <p>You have successfully logged in</p>
      </div>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '6px',
          backgroundColor: '#e74c3c',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
