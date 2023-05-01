import React from "react";
import Select from "react-select";

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "none",
    border: "1px solid #CBD5E0",
    ":hover": { border: "1px solid #CBD5E0" },
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 2,
  }),
};

const CustomSelect = ({ options, handleChange, ...rest }) => (
  <Select
    options={options}
    styles={customSelectStyles}
    onChange={handleChange}
    {...rest}
  />
);

export default CustomSelect;
