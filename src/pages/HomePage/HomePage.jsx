import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage__container">
      <h1 className="homePage__title">Home</h1>
      <Link to="/menu" className="button button--primary homePage__button">
        Go to Menu
      </Link>
    </div>
  );
};

export default HomePage;
