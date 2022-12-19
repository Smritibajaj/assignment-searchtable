import React from "react";
import NotFoundImage from "assignment-typescript-fe/assets/img/auth/404.svg";
import PageTitle from "../../../common/Typography/PageTitle";
import { useNavigate } from "react-router";
import CommonButton from "../../../common/Button";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center bg-brand-primary-white py-24 px-6">
      <div className="max-w-xs">
        <img src={NotFoundImage} alt="coming soon" className=" w-full" />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <PageTitle fontSize="2rem" className="text-brand-text-title mb-4">
          Access Denied !
        </PageTitle>
        <p className="text-brand-text-primary mb-4 max-w-xs text-center">
          You don't have permession
        </p>
        <div>
          <CommonButton
            onClick={() => navigate(-2)}
            text={`Go Back`}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
