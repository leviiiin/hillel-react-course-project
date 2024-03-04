import "./styles/reset.css";
import "./styles/global.css";

import { Header } from "./components/index";
import { Menu, Home, Login, PageNotFount, Signup } from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
