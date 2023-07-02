import React, { useState, useEffect } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Login_Image from "../../assets/images/login-image.png";
import EXL_Logo from "../../assets/images/exl_logo_orange.png";
import Login_Logo from "../../assets/images/login-icon.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {};
    if (!formData.username || !formData.password) {
      errors.username = "User Name is required";
      errors.password = "Password is required";
      setErrors(errors);
    } else {
      if (
        formData.username === "fdap" &&
        formData.password === "fdap@123"
      ) {
        // Store user data in local storage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", formData.username);
        if (formData.rememberMe) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }
        // Redirect to the home page
        navigate("/home");
      } else {
        // Show error message
        alert("Incorrect username or password. Please try again.");
      }
    }
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="login-form">
      <div className="container">
        <div className="row">
          <img className="image-logo" src={EXL_Logo} alt="exl_logo_orange" />
        </div>
        <div className="login-container row">
          <div className="login-form-data">Fan Data and Analytics Platform</div>

          <div className="login-form-container">
            <img src={Login_Logo} alt="login-icon" />
            <div className="title d-flex">Login</div>
            <form
              id="form"
              className="d-flex flex-column flex flex-col"
              onSubmit={handleSubmit}
            >
              <InputField
                type="text"
                name="username"
                label="User Name"
                value={formData.username}
                errors={errors.username}
                placeholder="Username"
                className="input-group"
                onChange={e => handleChange(e)
              }
              />

              <InputField
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                errors={errors.password}
                placeholder="Password"
                className="input-group"
                onChange={e => handleChange(e)}
              />
              <div className="remember-me-group">
                <label className="remember-me-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="formCheckbox"
                    value={formData.rememberMe}
                    className=""
                    onChange={e => handleChange(e)}
                  />
                  <span>Remember Me</span>
                </label>
              </div>
              <Button className="button" type="submit" label="Login" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
