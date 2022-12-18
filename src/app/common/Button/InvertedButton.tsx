import React from "react";
import { ButtonProps } from "./interfaces";

const InvertedButton: React.FC<ButtonProps> = (props) => {
  const { text, onClick, type, className, disabled, theme } = props;
  return (
    <>
      <button
        type={type || "button"}
        className={`py-2.5 px-6 text-sm focus:none rounded-sm ${theme ? theme :"text-brand-primary-blue border border-brand-primary-blue bg-white"} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default InvertedButton;
