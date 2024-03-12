import { Link } from "react-router-dom";
import "./NotFountPage.css";

const NotFountPage = () => {
  return (
    <div className="notFount-page__container">
      <h1 className="notFount-page__status">404</h1>
      <h2 className="notFount-page__description">Page Not Fount</h2>
      <Link to="/" className="button button--primary notFount-page__button">
        Home
      </Link>
    </div>
  );
};

export default NotFountPage;
