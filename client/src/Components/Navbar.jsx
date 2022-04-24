import React from "react";
import { NavLink } from "react-router-dom";
import "./comp.css";

function Navbar({ logout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            OLX
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-1">
                <NavLink className="nav-link " activeclassname="active" to="/">
                  Home
                </NavLink>
              </li>
              {!localStorage.getItem("User") ? (
                <li className="nav-item mx-1">
                  <NavLink
                    className="nav-link nav-login"
                    activeclassname="active"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {!localStorage.getItem("User") ? (
                <li className="nav-item mx-1">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {localStorage.getItem("User") ? (
                <li className="nav-item mx-1">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/profile"
                  >
                    My Items
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
            <ul className="me-5 navbar-nav logout"  >
              {localStorage.getItem("User") ? (
                <li className="nav-item"  >
                  <p id="logout" onClick={logout} >Logout</p>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
