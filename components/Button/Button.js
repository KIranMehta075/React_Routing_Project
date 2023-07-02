import React from "react";
import PropTypes from 'prop-types'

const Button = ({ label, type,  onClick, disabled, className }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  label: "Button",
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
