import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert('Form submitted successfully');
      setFormValid(true);
    } else {
      alert('Can’t submit the form');
      setFormValid(false);
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordValidated(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPasswordValidated(value === password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label><br/>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ borderColor: emailValidated ? 'green' : 'red' }}
        />
        {!emailValidated &&  <p className='p' style={{ color: 'red' }}>Please enter a valid email address.</p>}
      </div>
      <div>
        <label>Password:</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{ borderColor: passwordValidated ? 'green' : 'red' }}
        />
        {!passwordValidated &&  <p className='p' style={{ color: 'red' }}>Password must be at least 8 characters long.</p>}
      </div>
      <div>
        <label>Confirm Password:</label><br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(e.target.value);
          }}
          style={{ borderColor: confirmPasswordValidated ? 'green' : 'red' }}
        />
        {!confirmPasswordValidated && <p className='p' style={{ color: 'red' }}>Passwords do not match.</p>}
      </div><br/>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default App;
