// src/components/Register.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Full Name" /><br />
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <Link to="/login">Login</Link></p>
  </div>
);

export default Register;
