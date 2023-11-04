import { useState } from 'react';
import { useAuth } from '../Context/AuthContex';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';


const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      setErrorMessage('Please enter a valid username and password.');
      return;
    }
  
    try {
      await login(username, password);
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div className='form-group'>
          <input
            type='text'
            name='username'
            placeholder='Enter Username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <a href='/' className='link'>
          forgot your password
        </a>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <br />
        <button className='signin' type='submit'>
          <span>sign in</span>
        </button>
        <button className='register' onClick={() => navigate('/register')}>
          <span>register</span>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
