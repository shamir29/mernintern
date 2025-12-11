import React, { useState } from "react";
import { RegisterFormStyle } from "./RegisterForm-style";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    passoutYear: "",
    department: "",
    ugpg: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <RegisterFormStyle>
      <div className="form-wrapper">
        <h2 className="title">
          Welcome to <span className="highlight">Aptitude Guru Hem LMS</span>
        </h2>

        <form className="form-box" onSubmit={handleSubmit}>
          
          {/* FIRST + LAST NAME */}
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </div>
          </div>

 
          <div className="row">
            <div className="field">
              <label>Select College</label>
              <select name="college" onChange={handleChange}>
                <option value="">-- Select College --</option>
                <option value="Sri Eshwar">Sri Eshwar</option>
                <option value="SRM">SRM</option>
                <option value="IIT">IIT</option>
                <option value="NIT">NIT</option>
                <option value="MIT">MIT</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field">
              <label>Select Passout Year</label>
              <select name="passoutYear" onChange={handleChange}>
                <option value="">-- Select Year --</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="field">
              <label>Department</label>
              <select name="department" onChange={handleChange}>
                <option value="">-- Select Department --</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>

            <div className="field">
              <label>UG or PG</label>
              <select name="ugpg" onChange={handleChange}>
                <option value="">-- Select Level --</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile</label>
              <div className="mobile-box">
                <select>
                  <option value="IND">IND</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="CAN">CAN</option>
                </select>
                <input
                  name="mobile"
                  type="text"
                  placeholder="Enter mobile number"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>


          <div className="row">
            <div className="field">
              <label>Password</label>
              <div className="password-box">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter the password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="password-box">
                <input
                  name="confirmPassword"
                  type={showCPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowCPassword(!showCPassword)}>
                  {showCPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          </div>

 
          <ul className="password-rules">
            <li>minimum 8 characters</li>
            <li>one special character</li>
            <li>one number</li>
            <li>one lowercase character</li>
            <li>one uppercase character</li>
          </ul>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </RegisterFormStyle>
  );
};

export default RegisterForm;