import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUserName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!username || !first_name || !last_name || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email address.');
      setSuccessMessage('');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': username,
          'first_name': first_name,
          'last_name': last_name,
          'email': email,
          'password': password
        })
      });

      if (response.ok) {
        setSuccessMessage('Registration successful. The data has been saved.');
        setErrorMessage('');
      } else {
        setErrorMessage('There was an error during registration. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('There was a connection error. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className='container'>
      <form className='login-form' onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className='form-group'>
          <input
            type='text'
            name='username'
            placeholder='Create Username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='first-name'
            placeholder='First name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='last-name'
            placeholder='Last name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Create Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {successMessage && <p className='success-message'>{successMessage}</p>}
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <br />
        <button type='button' className='signin' onClick={() => navigate('/login')}>
          <span>sign in</span>
        </button>
        <button type='submit' className='register'>
          <span>register</span>
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
