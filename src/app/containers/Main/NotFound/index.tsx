import React from "react";
import NotFoundImage from "assignment-typescript-fe/assets/img/auth/404.svg";
import PageTitle from "../../../common/Typography/PageTitle";
import { useNavigate } from "react-router";
import CommonButton from "../../../common/Button";
import { PLATFORM_USERS } from "../../../utils/constants/constants";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const routeKey = localStorage.getItem("userType") || PLATFORM_USERS.BUYER;
  return (
    <div className="flex flex-col justify-center items-center bg-brand-primary-white py-24 px-6">
      <div className="max-w-xs">
        <img src={NotFoundImage} alt="coming soon" className=" w-full" />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <PageTitle fontSize="2rem" className="text-brand-text-title mb-4">
          Page not found !
        </PageTitle>
        <p className="text-brand-text-primary mb-4 max-w-xs text-center">
          This page doesn’t exist or was removed! We suggest you back to home
        </p>
        <div>
          <CommonButton
            onClick={() => navigate(`/${routeKey}`)}
            text={`Back to Home`}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
