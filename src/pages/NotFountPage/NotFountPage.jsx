import { Link } from "react-router-dom";
import "./NotFountPage.css";

const NotFountPage = () => {
  return (
    <div className="notFountPage__container">
      <h1 className="notFountPage__status">404</h1>
      <h2 className="notFountPage__description">Page Not Fount</h2>
      <Link to="/" className="button button--primary notFountPage__button">
        Home
      </Link>
    </div>
  );
};

export default NotFountPage;
