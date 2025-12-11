import React from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/signup', {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupFormComponent;  
