import "./styles/global.css";
import "./styles/reset.css";

import Header from "./layouts/Header/Header";
import Form from "./components/Form/Form"

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
        <Form/>
      </main>
    </div>
  );
}

export default App;
