import { ButtonProps } from "./interfaces";
import React from "react";

const CommonButton: React.FC<ButtonProps> = (props) => {
  const { text, onClick, type, className, disabled, theme } = props;
  return (
    <>
      <button
        type={type || "button"}
        className={`py-2.5 px-6 text-sm min-w-max border border-brand-primary-blue ${theme ? theme :"bg-brand-primary-blue hover:bg-brand-hover-blues text-white"} ${className ? className: ""} ${disabled ? "opacity-75": ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default CommonButton;
