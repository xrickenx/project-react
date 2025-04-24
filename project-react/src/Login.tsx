import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); 
    } catch (err: any) {
      setError('User not registered or password is incorrect.');
    }
  };

  return (
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
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              margin: '0 auto',
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
};

export default Login;
