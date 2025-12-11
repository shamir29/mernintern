import React, { useState } from "react";

const EmailStoreExample = () => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  // Save when clicking button
  const saveEmail = () => {
    console.log("Email:", email);
    localStorage.setItem("userEmail", email);
    alert("Email saved!");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={saveEmail} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Save Email
      </button>
      {email && <p style={{ marginTop: "10px" }}>Current: {email}</p>}
    </div>
  );
};

export default EmailStoreExample;