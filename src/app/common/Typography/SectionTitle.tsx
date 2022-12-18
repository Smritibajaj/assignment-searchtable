import React from "react";

interface ISectionTitle {
  children: React.ReactNode | string
  fontSize?: number | string
  className?: string
}
function SectionTitle({ children, fontSize, className }: ISectionTitle) {
  return (
    <h2
      style={{ fontSize: fontSize }}
      className={
        "font-semibold text-brand-text-title text-xl" + " " + className
      }
    >
      {children}
    </h2>
  );
}
export default SectionTitle;
