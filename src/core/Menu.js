import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#2ecc72",
      background: "rgba(0,0,0,.31)",
      borderRadius: "10px",
    };
  } else return { color: "#ffffff" };
};

const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs fixed-top">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/about")}
            className="nav-link"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/projects")}
            className="nav-link"
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/ui-kits")}
            className="nav-link"
            to="/ui-kits"
          >
            UI Kits
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default withRouter(Menu);
