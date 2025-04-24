import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f1f2f6',
  }}>
    <div style={{
      width: '400px',
      padding: '2.5rem',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: '600' }}>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          style={{
            height: '48px',
            fontSize: '16px',
            padding: '0 12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            height: '48px',
            fontSize: '16px',
            padding: '0 12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
        type="submit"
        style={{
          width: '150px',
          height: '40px',
          backgroundColor: '#3478f6',
          color: 'white',
          fontSize: '15px',
          fontWeight: '500',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          margin: '0 auto', // centers the button inside the form
        }}
      >
        Login
      </button>

      </form>
      <p style={{ marginTop: '1.5rem', fontSize: '15px' }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  </div>
);

export default Login;
