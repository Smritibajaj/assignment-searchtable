/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CommonButton from "../Button";
interface IModalProps {
  handleTryAgain: () => void;
}

const InternetConnectionLost = (props: IModalProps): JSX.Element => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden px-6 h-full overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className="w-96 relative overflow-hidden transition-all md:h-auto transform bg-white md:rounded sm:shadow-xl md:max-w-xl flex flex-col max-h-screen-resp"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className=" absolute top-0 z-10 bg-white w-full px-4 py-3 flex justify-between  text-white">
            <div className="text-white font-bold text-xl"></div>
          </div>
          <div className="text-center text-white font-bold text-xl overflow-y-scroll my-4 py-8  px-8 text-sm text-brand-primary-blue">
            <div>Internet Connection Error</div>
            <CommonButton text={"Try Again"} className="my-6" onClick={props.handleTryAgain} />
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-white"></div>
    </>
  );
};

export default InternetConnectionLost;
