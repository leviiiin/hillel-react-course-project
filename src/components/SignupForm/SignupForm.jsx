import { useState } from "react";
import "./SignupForm.css";
import { Button, Form } from "../index";
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
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    navigate("/login");
  };

  return (
    <Form className="form" onSubmit={handleSignup}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input form__input"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input form__input"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="input form__input"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
      {error && <p className="error-message">{error}</p>}
      <Button type="submit" theme="primary" className="form__button">
        Sign Up
      </Button>
      <div>
        Have an Account?
        <Link className="form__link" to="/login">
          Log In
        </Link>
      </div>
    </Form>
  );
};

export default SignupForm;
