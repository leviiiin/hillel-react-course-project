import "./SignupForm.css";
import { useState } from "react";
import { Input, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    navigate("/login");
  };

  return (
    <form className="login-form">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        className="login-form__input"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        className="login-form__input"
        value={formData.password}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="login-form__input"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
      {error && <p className="error-message">{error}</p>}
      <Button
        theme="primary"
        className="login-form__button"
        onClick={handleSignup}
      >
        Sign Up
      </Button>
      <div className="login-link__container">
        Have an Account?
        <Link className="login-link" to="/login">
          Log In
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
