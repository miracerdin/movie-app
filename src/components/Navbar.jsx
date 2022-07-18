import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Nav1 from "./Navbar.styled.jsx";

const Navbar = () => {
  return (
    <Nav1 className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/login"
                className="nav-link"
                aria-current="page"
              >
                Login
              </NavLink>
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
            {/* <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/"
                className="nav-link"
                aria-current="page"
                onClick={() => {
                  localStorage.clear();
                  window.reload();
                }}
              >
                Logout
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </Nav1>
  );
};

export default Navbar;
