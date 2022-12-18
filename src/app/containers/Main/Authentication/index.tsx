import ImageDark from "assignment-typescript-fe/assets/img/buydesk-register.svg";
import { IAuth } from "./interfaces";

/**
 *
 * @param props children
 * @returns a page with common right side and different form
 */

export default function Auth(props: IAuth) {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-white">
        <div className="flex flex-col h-full overflow-y-auto md:flex-row">
          <main className="flex items-center justify-center  md:w-1/2 h-full">
            {props.children}
          </main>
          <div className="hidden md:block md:w-1/2 h-screen bg-brand-background-white">
            <div className="h-full grid  justify-items-center content-evenly">
              <div className="mx-auto">
                <img aria-hidden="true" src={ImageDark} alt="splash-image" />
              </div>
              <div className="flex justify-center flex-col w-4/5 space-y-5">
                <h2 className="text-brand-hover-blue text-3xl font-bold text-center">
                  Sign Up
                </h2>
                <p className="text-brand-text-primary text-base font-normal text-center">
                  Leads finder tool for multi-task B2B sales, recruiting and
                  marketing managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
