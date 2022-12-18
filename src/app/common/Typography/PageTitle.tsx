import React from "react";
interface IPageTitle {
  className?: string;
  fontSize?: string | number;
  children: React.ReactNode | string;
}

function PageTitle({ children, fontSize, className }: IPageTitle) {
  return (
    <h1
      style={{ fontSize: fontSize }}
      className={`text-2xl font-semibold text-brand-text-title ${className}`}
    >
      {children}
    </h1>
  );
}
export default PageTitle;
