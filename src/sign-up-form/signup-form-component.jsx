import React, { useState } from "react";
import axios from "axios";
const SignupFormComponent = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);
    try {
      const response = await axios.post('http://localhost:5000/api/signup', data);
      console.log('Success:', response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.error || 'Error occurred');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
      console.log('Users from database:', response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="firstname" placeholder="First Name" required />
        <input type="text" name="secondname" placeholder="Last Name" />
        <input type="tel" name="mobile" placeholder="Mobile Number" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      
      {message && <p>{message}</p>}
      
      <button onClick={fetchUsers}>View Users</button>
      
      {users.length > 0 && (
        <div>
          <h3>Users</h3>
          {users.map((user, index) => (
            <div key={index}>
              <p>{user.firstname} {user.secondname}</p>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SignupFormComponent;