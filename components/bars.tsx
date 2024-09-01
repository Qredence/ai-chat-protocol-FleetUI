import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BarsType = {
  className?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
  divFontFamily?: CSSProperties["fontFamily"];
};

const Bars: NextPage<BarsType> = ({
  className = "",
  propWidth,
  propFlexDirection,
  propPadding,
  propFlex,
  propBoxShadow,
  propBackgroundColor,
  propOverflow,
  propMinWidth,
  prop,
  propDisplay,
  propMinWidth1,
  propFlex1,
  propColor,
  propTextDecoration,
  propFontWeight,
  divFontFamily,
}) => {
  const barsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      padding: propPadding,
      flex: propFlex,
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
      minWidth: propMinWidth,
    };
  }, [
    propWidth,
    propFlexDirection,
    propPadding,
    propFlex,
    propBoxShadow,
    propBackgroundColor,
    propOverflow,
    propMinWidth,
  ]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      flex: propFlex1,
      color: propColor,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
      fontFamily: divFontFamily,
    };
  }, [
    propDisplay,
    propMinWidth1,
    propFlex1,
    propColor,
    propTextDecoration,
    propFontWeight,
    divFontFamily,
  ]);

  return (
    <div
      className={`w-[49px] rounded-radius-round flex flex-row items-end justify-start py-1.5 px-3.5 box-border text-center text-mini text-labels-primary font-sf-compact ${className}`}
      style={barsStyle}
    >
      <div className="flex-1 relative leading-[20px]" style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default Bars;
