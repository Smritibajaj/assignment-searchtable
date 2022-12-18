import React from "react";
import BackIconImage from "assignment-typescript-fe/assets/img/home/arrow-left.svg";
import { useNavigate } from "react-router-dom";

interface BackNavigationProps {
  className?: string;
}

const BackNavigation: React.FC<BackNavigationProps> = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <>
      <img
        alt={"Go back"}
        className={`cursor-pointer ${className ? className : ""}`}
        src={BackIconImage}
        onClick={() => navigate(-1)}
      />
    </>
  );
};

export default BackNavigation;
