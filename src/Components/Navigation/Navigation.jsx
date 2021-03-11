import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavigationStyle.scss";

function Navigation(props) {
  return (
      <nav className="navbar navbar-expand navbar-light bg-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Team Builder
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/heroes" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/heroes">
                  Heroes
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/team" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default withRouter(Navigation);