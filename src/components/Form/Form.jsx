import { useState } from "react";
import "./Form.css";
import { Input, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ formType }) => {
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

  const handleLogin = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    navigate("/menu");
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

  const handleSubmit = (event) => {
    if (formType === "login") {
      handleLogin(event);
    } else if (formType === "signup") {
      handleSignup(event);
    }
  };

  if (formType === "login") {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="form__input"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="form__input"
          value={formData.password}
          onChange={handleInputChange}
        />
        {error && <p className="error-message">{error}</p>}
        <Button type="submit" theme="primary" className="form__button">
          Login
        </Button>
        <div>
          Don&apos;t have an account?
          <Link className="form__link" to="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    );
  }

  if (formType === "signup") {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="form__input"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="form__input"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form__input"
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
      </form>
    );
  }

  return null;
};

export default Form;
