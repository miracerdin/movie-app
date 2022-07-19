import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Nav1 from "./Navbar.styled.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const handleReload = () => {
    navigate("/");
    window.location.reload();
  };
  const local = JSON.parse(localStorage.getItem("user"));
  const handleLocalClear = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <Nav1 className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={() => handleReload()}>
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent123"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent123"
        >
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li>
              {!local ? (
                <NavLink
                  style={({ isActive }) => ({ color: isActive && "red" })}
                  to="/login"
                  className="nav-link"
                  aria-current="page"
                >
                  Login
                </NavLink>
              ) : (
                <button onClick={() => handleLocalClear()} className="nav-link">
                  Logout
                </button>
              )}
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/register"
                className="nav-link"
                aria-current="page"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Nav1>
  );
};

export default Navbar;
