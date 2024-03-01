import "./Header.css";
import Input from '../BaseInput/BaseInput'

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="/">
        Pizza Day
      </a>
      <form>
        <Input placeholder='Search for the order #' />
      </form>
    </header>
  );
};

export default Header;
