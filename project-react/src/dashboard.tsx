import React from 'react';

const Dashboard = () => {
  return (
    <div style={{
      display: 'flex',
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
      }}>
        <p>You have successfully logged in</p>
      </div>
    </div>
  );
};

export default Dashboard;
