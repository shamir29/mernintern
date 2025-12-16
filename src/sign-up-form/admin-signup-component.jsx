import React, { useState } from "react";
import axios from "axios";

const AdminSignupComponent = () => {
  const [admins, setAdmins] = useState([]);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Admin Form Data:', data);
    try {
      const response = await axios.post('http://localhost:5000/api/admin/signup', data);
      console.log('Success:', response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.error || 'Error occurred');
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admins');
      setAdmins(response.data);
      console.log('Admins from database:', response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Admin Email" required />
        <input type="text" name="firstname" placeholder="First Name" required />
        <input type="text" name="secondname" placeholder="Last Name" />
        <input type="tel" name="mobile" placeholder="Mobile Number" required />
        <input type="password" name="password" placeholder="Admin Password" required />
        <button type="submit">Register Admin</button>
      </form>
      
      {message && <p>{message}</p>}
      
      <button onClick={fetchAdmins}>View Admins</button>
      
      {admins.length > 0 && (
        <div>
          <h3>Admins</h3>
          {admins.map((admin, index) => (
            <div key={index}>
              <p>{admin.firstname} {admin.secondname}</p>
              <p>{admin.email}</p>
              <p>{admin.mobile}</p>
              <p>ADMIN</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSignupComponent;