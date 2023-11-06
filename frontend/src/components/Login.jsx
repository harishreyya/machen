import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // https://manchen-backend.onrender.com/
      // http://localhost:5000/login
      const response = await axios.post('https://manchen-backend.onrender.com/login', {
        email,
        password,
      });
    
      navigate('/userlist');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>new User? please <Link to="/">REGISTER</Link></p>
    </div>
  );
};

export default Login;
