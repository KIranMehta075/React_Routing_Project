import React, { useEffect } from "react";
import "./NavBar.css";
import EXL_Logo from "../../assets/images/exl_logo_orange.png";
import EXL_Logo_White from "../../assets/svg/exl_logo_rgb_wht_rev.svg";
import { Link } from "react-router-dom";

const NavBar = ({
  onChange,
  selectedOption,
  label,
  onClick,
  isOpen,
  className
}) => {
  return (
    // <nav
    //   className={`nav-bar-dropdown navbar navbar-expand-sm  navbar-dark py-1 ${className}`}
    // >
    //   <div className="container-fluid">
    //     <a href="#" className="navbar-brand d-flex">
    //       <img
    //         className="mb-0 h1 me-0 p-0"
    //         src={EXL_Logo_White}
    //         alt="exl_logo_white"
    //       />
    //       <div className="border-left mt-2">
    //         <span className="text-white ms-2">{label}</span>
    //       </div>
    //     </a>
    //     <div>
    //       <select
    //         className="form-select"
    //         value={selectedOption}
    //         onChange={onChange}
    //       >
    //         <option value=" " hidden data-content="">
    //           Go To
    //         </option>
    //         <option value="dashboard">Dashboard</option>
    //       </select>
    //     </div>
    //   </div>
    // </nav>

    //  Navigation Bar
      <nav className="nav-bar-dropdown navbar navbar-expand-sm navbar-dark py-1">
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
          <ul className="navbar-nav" >
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle show`}
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isOpen}
                onToggle={onClick}
              ></a>
              <ul className={`dropdown-menu dropdown-menu-dark dropdown-menu-end  ${isOpen ? "show" : " "}`}
              data-bs-popper="static">
                <li>
                  <Link className="dropdown-item" to="/video-analytics">
                    Pipeline
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboards
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default NavBar;
