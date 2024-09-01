import type { NextPage } from "next";
import Leading from "./leading";
import Trailing from "./trailing";

export type SidebarRowType = {
  className?: string;
  icon?: string;
  text?: string;
  showIcon?: boolean;
  propPadding?: string;
  propColor?: string;
  propMinWidth?: string;
  detail?: string;
  trailingSymbol?: string;
  showSymbol?: boolean;
  showDetail?: boolean;
};

const SidebarRow: NextPage<SidebarRowType> = ({
  className = "",
  icon,
  text,
  showIcon,
  propPadding,
  propColor,
  propMinWidth,
  detail,
  trailingSymbol,
  showSymbol,
  showDetail,
}) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-center justify-start py-0 px-spacing-8 text-left text-mini text-labels-primary font-single-line-body-base ${className}`}
    >
      <div className="self-stretch rounded-radius-sm bg-grays-white flex flex-row items-center justify-center py-0 px-2 gap-2">
        <Leading
          showIcon={showIcon}
          text={text}
          propPadding={propPadding}
          icon={icon}
          propColor={propColor}
          propMinWidth={propMinWidth}
        />
        <Trailing
          showSymbol={showSymbol}
          detail={detail}
          showDetail={showDetail}
          trailingSymbol={trailingSymbol}
        />
      </div>
    </div>
  );
};

export default SidebarRow;
