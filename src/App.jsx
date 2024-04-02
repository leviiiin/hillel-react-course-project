import "./styles/reset.css";
import "./styles/global.css";
import { Header, Loader } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomeLazy = lazy(() => import("./pages/HomePage/HomePage"));
const MenuLazy = lazy(() => import("./pages/MenuPage/MenuPage"));
const LoginLazy = lazy(() => import("./pages/LoginPage/LoginPage"));
const SignupLazy = lazy(() => import("./pages/SignupPage/SignupPage"));
const CartLazy = lazy(() => import("./pages/CartPage/CartPage"));
const OrderLazy = lazy(() => import("./pages/OrderPage/OrderPage"));
const OrderDetailsLazy = lazy(() =>
  import("./pages/OrderDetailsPage/OrderDetailsPage")
);
const NotFountLazy = lazy(() => import("./pages/NotFountPage/NotFountPage"));

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeLazy />} />
            <Route path="/menu" element={<MenuLazy />} />
            <Route path="/login" element={<LoginLazy />} />
            <Route path="/signup" element={<SignupLazy />} />
            <Route path="/cart" element={<CartLazy />} />
            <Route path="/order" element={<OrderLazy />} />
            <Route path="/order/:id" element={<OrderDetailsLazy />} />
            <Route path="*" element={<NotFountLazy />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
