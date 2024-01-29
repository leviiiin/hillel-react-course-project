import "./Header.css";
import "../../components/BaseInput/BaseInput.css";
import Input from '../../components/BaseInput/BaseInput'

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
