import "./styles/reset.css";
import "./styles/global.css";

import Header from "./layouts/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <h1 className="title">
          The best pizza.
          <br />
          <span className="text-yellow">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <LoginForm/>
      </main>
    </div>
  );
}

export default App;
