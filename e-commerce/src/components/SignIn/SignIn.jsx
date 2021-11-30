import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils";

function SignIn() {
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
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        login(data.accessToken, data.refreshToken);
        navigate("/products");
      })
      .catch((error) => {
        alert("Username or password is not good");
        console.log(error);
      });
  };

  return (
    <>
      <form className="signUp" onSubmit={handleSubmit}>
        <div>
          <h2>Sign in</h2>
        </div>
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
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
