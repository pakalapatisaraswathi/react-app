import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import Home from "./Home";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Milk from "./Milk";
import Login from "./Login";
import NonVeg from "./NonVeg";
import Orders from "./Orders";
import VegItems from "./VegItems";
import Sweets from "./Sweets";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fruits from "./Fruits";
import Juice from "./Juice";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth?.isAuthenticated;
  const user = auth?.user?.name || "User"; // Ensure it properly displays the user's name

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            FreshMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/vegitems" className="nav-link text-white">
                  Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link text-white">
                  Non-Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/milk" className="nav-link text-white">
                  Milk Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sweets" className="nav-link text-white">
                  Sweets Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fruits" className="nav-link text-white">
                  Fruits Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/juice" className="nav-link text-white">
                  Juice Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white">
                  Cart
                  <sup>
                    <span className="badge bg-warning text-dark">
                      {totalItems}
                    </span>
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link text-white">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-white">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-white me-3">
                    Welcome, {user}
                  </span>
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn btn-outline-light"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-light">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vegitems" element={<VegItems />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
