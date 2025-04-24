import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './firebase'; // Adjust path if needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Register with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Firestore (you can modify this as needed)
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email,
        createdAt: new Date()
      });

      // Redirect to login
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8', // Soft background color
    }}>
      <div style={{
        width: '400px',
        padding: '2.5rem',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
      }}>
        <h2 style={{
          marginBottom: '2rem',
          fontSize: '28px',
          fontWeight: '700',
          color: '#2f3542', // Darker text for the title
        }}>
          Register
        </h2>
        {error && <p style={{
          color: '#e74c3c',
          fontSize: '14px',
          marginBottom: '1rem',
          fontWeight: '500',
        }}>
          {error}
        </p>}
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: '48px',
              fontSize: '16px',
              padding: '0 12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.3s ease',
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)'} // Highlight on focus
            onBlur={(e) => e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'} // Remove highlight on blur
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
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.3s ease',
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)'}
            onBlur={(e) => e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'}
          />
          <button
          type="submit"
          style={{
            width: '100%',
            height: '45px',
            backgroundColor: '#3478f6', // Initial color
            color: 'white',
            fontSize: '16px',
            fontWeight: '500',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a29bfe'} // Light purple on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3478f6'} // Reset to original color on mouse out
          onClick={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Button press effect
        >
          Register
        </button>

        </form>
        <p style={{
          marginTop: '1.5rem',
          fontSize: '15px',
          color: '#34495e',
        }}>
          Already have an account? <Link to="/login" style={{
            color: '#3478f6',
            textDecoration: 'none',
          }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
