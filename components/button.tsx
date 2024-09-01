import type { NextPage } from "next";

const ButtonComponent: NextPage = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-border-brand-default border-[1px] border-solid py-1.5 px-[7px] bg-text-colors-text-primary w-[79px] rounded-inputarea-button-border-radius box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-space-200 cursor-pointer border-border-brand-default border-[1px] border-solid py-1.5 px-[7px] bg-text-colors-text-primary w-[79px] rounded-inputarea-button-border-radius box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-space-200 ${className}`}
    >
      <img
        className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px] h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
        alt=""
        src="/star.svg"
      />
      <div className="relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[39px] relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[39px]">
        Send
      </div>
      <img
        className="h-4 w-4 relative min-h-[16px] h-4 w-4 relative min-h-[16px]"
        alt=""
        src="/paperplaneright.svg"
      />
    </button>
  );
};

export default ButtonComponent;
