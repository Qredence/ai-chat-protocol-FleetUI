import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LeadingType = {
  className?: string;
  showIcon?: boolean;
  text?: string;
  icon?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Leading: NextPage<LeadingType> = ({
  className = "",
  showIcon = true,
  text = "Knowledge Agent",
  propPadding,
  icon,
  propColor,
  propMinWidth,
}) => {
  const leadingStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div
      className={`flex flex-row items-center justify-start py-0 px-0 gap-2.5 text-left text-mini text-labels-primary font-single-line-body-base ${className}`}
      style={leadingStyle}
    >
      {showIcon && (
        <img className="h-6 w-6 relative" loading="lazy" alt="" src={icon} />
      )}
      <div
        className="relative tracking-[-0.4px] leading-[20px] font-semibold inline-block min-w-[124px]"
        style={titleStyle}
      >
        {text}
      </div>
    </div>
  );
};

export default Leading;
