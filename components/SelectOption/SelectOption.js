import React from 'react';
import PropTypes from "prop-types";
import { FaUser } from 'react-icons/fa';

const SelectOption = ({ options, onChange, className }) => {
    return (
        <div className={`select-wrapper `}>
        <select onChange={onChange} className="form-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    );
}

SelectOption.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default SelectOption;


