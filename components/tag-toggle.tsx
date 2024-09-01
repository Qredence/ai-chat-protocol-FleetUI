import type { NextPage } from "next";

const TagToggle: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px] shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px] ${className}`}
    >
      <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[87px] relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[87px]">
        #agentic_fleet
      </div>
    </div>
  );
};

export default TagToggle;
