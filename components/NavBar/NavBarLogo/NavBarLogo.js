import React from "react";
import "./NavBarLogo.css";
import EXL_Logo from "../../../assets/svg/exl_logo_rgb_wht_rev.svg";

const NavBarLogo = ({ label, className }) => {
  return (
    <nav className={`nav-bar-logo navbar navbar-light py-1 ${className}`}>
      <div className="container-fluid">
        <img
          className="navbar-brand mb-0 h1 me-0"
          src={EXL_Logo}
          alt="exl_logo_white"
        />
        <div className="text-white ps-2">{label}</div>
      </div>
    </nav>
  );
};

export default NavBarLogo;
