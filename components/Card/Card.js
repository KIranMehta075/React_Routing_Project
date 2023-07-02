import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, src, alt, onClick }) => {
  return (
    <div className="card mt-5" onClick={onClick}>
      <div className="row g-0 align-content-center">
        <div className="col-5 d-flex justify-content-center p-3">
          <img src={src} className="img-fluid" alt={alt} />
        </div>
        <div className="col-7">
          <div className="card-body  d-flex flex-wrap ">
            <p className="card-text text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
};

export default Card;
