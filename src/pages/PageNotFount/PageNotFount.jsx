import { Link } from "react-router-dom";
import "./PageNotFount.css";

const PageNotFount = () => {
  return (
    <div className="pageNotFount">
      <h1 className="pageNotFount__status">404</h1>
      <h2 className="pageNotFount__description">Page Not Fount</h2>
      <Link to="/" className="button button--primary pageNotFount__button">
        Home
      </Link>
    </div>
  );
};

export default PageNotFount;
