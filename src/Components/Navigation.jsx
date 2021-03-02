import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
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
    </div>
  );
}

export default withRouter(Navigation);