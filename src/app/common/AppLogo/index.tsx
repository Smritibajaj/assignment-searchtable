import React from "react";
import AppLogoImage from "assignment-typescript-fe/assets/img/logo-blue.svg";
import AppLogoSmall from "assignment-typescript-fe/assets/img/logo-blue.svg";

interface AppLogo {
  small?: boolean;
  className?: string;
}

const AppLogo = (props: AppLogo) => {
  const { small, className } = props;
  return (
    <div className={`${className}`}>
      <img
        src={small ? AppLogoSmall : AppLogoImage}
        alt="logo"
        className="inline-block"
      />
    </div>
  );
};

export default AppLogo;
