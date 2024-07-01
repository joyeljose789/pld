import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
  const navigate = useNavigate();
  
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        email,
        password
      });
      if (response.status === 200) {
        setResult(`Your name is ${username}, your email is ${email}, and you have entered a password.`);
        navigate('/home');
      }
    } catch (error) {
      setError('User not found');
    }
  }

  return (
    <div className="Welcome">
        <div className="second">
      <h1>Login</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={username}
          onChange={handleUsername}
        />
        <br /><br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={handleEmail}
        />
        <br /><br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <br /><br />
        <button>Login</button>
        <button><a href="/register">Sign in</a></button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <div>{result}</div>}
      </div>
    </div>
  );
}

export default Nav;