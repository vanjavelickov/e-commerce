import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      navigate("/signin");
    });
  };

  return (
    <>
      <h1>Sign up</h1>
      <form className="signUp" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input
            type="password"
            id="pass"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" value="Sign up" className="signUpButton">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
