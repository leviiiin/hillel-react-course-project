import "./Header.css";
import { Input } from "../index";
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
        </ul>
      </nav>
      <form>
        <Input placeholder="Search for the order #" />
      </form>
    </header>
  );
};

export default Header;
