// src/normalprog.js
import React, { useState } from "react";

function Fourteen() {
  const initialForm = { name: "", email: "", password: "", gender: "" };
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  const { name, email, password, gender } = form;

  return (
    <div style={{ maxWidth: 480, fontFamily: "Arial" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChange} placeholder="Name" required />
        <br /><br />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <br /><br />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
        <br /><br />
        <select name="gender" value={gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <br /><br />
        <button type="submit">Register</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: 10 }}>Reset</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 20 }}>
          <h3>Submitted Data</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Gender:</b> {gender}</p>
        </div>
      )}
    </div>
  );
}

export default Fourteen;