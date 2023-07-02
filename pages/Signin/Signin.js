import React, { useState, useEffect } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Login_image from "../../assets/images/Football-Player.jpg";
import EXL_Logo from "../../assets/images/exl_logo_orange.png";
import Login_Logo from "../../assets/images/login-icon.png"
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
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
    // Save login data to local storage if "Remember Me" is checked
    if (formData.rememberMe) {
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      localStorage.removeItem("formData");
    }

    const errors = {};
    if (!formData.username) {
      errors.username = "User Name is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
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
    <section className="signin-form">
      <div className="signin">
        <div className="col-5 col-1">
          <img className="image-logo" src={EXL_Logo} alt="exl_logo_orange" />
          <div className="signin-form-data">Fan Data & Analytics Platform</div>
          <img
            className="image-background"
            src={Login_image}
            alt="football-player-login-image"
          />
        </div>
        <div className=" col-7 col-2">
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
              onChange={e => handleChange(e)}
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
    </section>
  );
};

export default Signin;
