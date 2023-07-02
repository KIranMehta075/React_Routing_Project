import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  errors,
  name,
  className,
  id
}) => {
  return (
    <div className={`${className === "input-group" ? "input-group" : " "}`}>
      {label && <label className="input-field-label">{label}</label>}
      <input
        className={`${
          errors
            ? "input-field-errors input-field "
            : className === "form-control"
            ? "form-control"
            : "input-field"
        }`}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />
      {errors && <span className="input-error-span">{errors}</span>}
    </div>
  );
};

InputField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  placeholder: "",
  id: " "
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputField;
