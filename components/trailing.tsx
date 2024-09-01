import type { NextPage } from "next";

export type TrailingType = {
  className?: string;
  showSymbol?: boolean;
  detail?: string;
  showDetail?: boolean;
  trailingSymbol?: string;
};

const Trailing: NextPage<TrailingType> = ({
  className = "",
  showSymbol = false,
  detail = "Detail",
  showDetail = false,
  trailingSymbol = "􀓔",
}) => {
  return (
    <div
      className={`self-stretch w-[76px] flex flex-row items-center justify-start py-[11px] px-0 box-border gap-2 text-right text-mid text-labels-secondary font-subheadline-emphasized ${className}`}
    >
      {showDetail && (
        <div className="self-stretch w-11 relative tracking-[-0.43px] leading-[22px]">
          {detail}
        </div>
      )}
      {showSymbol && (
        <div className="self-stretch w-6 relative leading-[22px] text-colors-blue text-center items-center justify-center shrink-0">
          {trailingSymbol}
        </div>
      )}
    </div>
  );
};

export default Trailing;
