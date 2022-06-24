import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const { cb, placeholder, className } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={cb}
    />
  );
};
export default SearchBox;
