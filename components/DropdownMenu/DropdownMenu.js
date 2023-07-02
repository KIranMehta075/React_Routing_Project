import React, { useState } from "react";
import "./DropdownMenu.css";
import EXL_Logo_White from "../../assets/svg/exl_logo_rgb_wht_rev.svg";
import { Link } from "react-router-dom";

const DropdownMenu = ({ label,}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`nav-bar-dropdown navbar navbar-expand-sm navbar-dark py-1`}>
      <div className="container">
        <a href="#" className="navbar-brand d-flex">
          <img
            className="mb-0 h1 me-0 p-0"
            src={EXL_Logo_White}
            alt="exl_logo_white"
          />
          <div className="border-left mt-2">
            <span className="text-white ms-2">{label}</span>
          </div>
        </a>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
           Go To
          </button>
          <ul
            className={`dropdown-menu${isOpen ? " show" : ""}`}
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <Link className="dropdown-item" to="/dashboard">
                Dashboards
              </Link>
              <li>
              <Link className="dropdown-item" to="/home">
                Home
              </Link>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DropdownMenu;
