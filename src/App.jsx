import "./styles/reset.css";
import "./styles/global.css";

import { Header } from "./components/index";
import { HomePage } from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
