import React from "react";

const Button = ({ name, imgSrc, onClickFunction }) => {
  return (
    <button
      type="button"
      className={`Button ${name
        .replace(/\s+/g, "-")
        .toLowerCase()}-button`}
      onClick={onClickFunction}
    >
      <img src={imgSrc} alt={name} />
    </button>
  );
};

export default Button;
