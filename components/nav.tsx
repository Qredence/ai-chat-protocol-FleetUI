import type { NextPage } from "next";
import TabBar from "./tab-bar";

export type NavType = {
  className?: string;
};

const Nav: NextPage<NavType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-grays-white overflow-hidden flex flex-col items-center justify-center py-0 pl-[23px] pr-0 box-border max-w-full text-left text-2xl text-text-colors-text-primary font-inter-variable ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-[15.5px] px-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-8 box-border relative gap-5 max-w-full mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <a className="[text-decoration:none] relative tracking-[-1px] leading-[41px] font-bold text-[inherit] inline-block min-w-[101px]">
              GraphFleet
            </a>
            <div className="h-[34px] rounded-radius-xl bg-grays-white border-gray-200 border-[1px] border-solid box-border hidden flex-row items-center justify-start py-1 px-2.5 gap-spacing-4 text-base text-labels-primary font-cal-sans">
              <div className="h-5 w-[21.8px] rounded-[7.06px] bg-labels-primary overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <img
                  className="w-[15.7px] h-[14.7px] relative"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="self-stretch w-[86px] relative tracking-[-0.16px] font-semibold inline-block shrink-0">
                <span>Q</span>
                <span className="text-lgi-7">redence</span>
              </div>
              <div className="bg-background-opaque-none hidden flex-row items-center justify-center">
                <img className="h-5 w-5 relative" alt="" src="/command.svg" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="h-8 w-8 rounded-1313xl flex flex-row items-center justify-center bg-[url('/button-1@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[37px] w-[37px] relative hidden"
                alt=""
                src="/user.svg"
              />
            </div>
          </div>
          <TabBar />
        </div>
      </div>
    </header>
  );
};

export default Nav;
