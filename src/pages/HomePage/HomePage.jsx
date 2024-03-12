import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Home</h1>
      <Link to="/menu" className="button button--primary home-page__button">
        Go to Menu
      </Link>
    </div>
  );
};

export default HomePage;
