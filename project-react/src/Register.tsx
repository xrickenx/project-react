import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './firebase'; // Adjust path if needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Register with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
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
        <h2 style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: '600' }}>Register</h2>
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            Register
          </button>
        </form>
        <p style={{ marginTop: '1.5rem', fontSize: '15px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
