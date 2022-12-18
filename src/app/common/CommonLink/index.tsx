import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  tag?: any;
  to?: string;
  className?: string;
  disabled?: boolean;
  theme?: string
}

const CommonLink: React.FC<ButtonProps> = (props) => {
  const { text, onClick, className, theme } = props;
  return (
    <>
      <span
        className={`cursor-pointer py-3 pr-6 text-sm ${theme ? theme :"text-brand-primary-blue"} ${className}`}
        onClick={onClick}
      >
        {text}
      </span>
    </>
  );
};

export default CommonLink;
