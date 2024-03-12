import "./Header.css";
// import { Input } from "../index";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="/">
        Pizza Day
      </a>
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <NavLink
              to="/"
              className="header__menu__link"
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="header__menu__link"
              activeclassname="active"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="header__menu__link"
              activeclassname="active"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <form>
        <Input placeholder="Search for the order #" />
      </form> */}
      <NavLink
        to="/cart"
        className="header__menu__link"
        activeclassname="active"
      >
        <i className="bi bi-cart3 header__cart"></i>
      </NavLink>
    </header>
  );
};

export default Header;
