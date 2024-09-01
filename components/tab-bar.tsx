import type { NextPage } from "next";
import Bars from "./bars";

export type TabBarType = {
  className?: string;
};

const TabBar: NextPage<TabBarType> = ({ className = "" }) => {
  return (
    <nav
      className={`!m-[0] w-[528px] absolute top-[5.6px] left-[calc(50%_-_264px)] rounded-xl bg-gray-300 overflow-hidden shrink-0 flex flex-row items-start justify-start p-1 box-border gap-1 max-w-full whitespace-nowrap text-center text-mini text-labels-primary font-sf-compact mq750:flex-wrap ${className}`}
    >
      <Bars
        propWidth="49px"
        propFlexDirection="row"
        propPadding="6px 14px"
        propFlex="unset"
        propBoxShadow="unset"
        propBackgroundColor="unset"
        propOverflow="unset"
        propMinWidth="unset"
        prop="􀏚"
        propDisplay="inline-block"
        propMinWidth1="21px"
        propFlex1="1"
        propColor="#000"
        propTextDecoration="unset"
        propFontWeight="unset"
        divFontFamily="'SF Compact'"
      />
      <Bars
        propWidth="unset"
        propFlexDirection="column"
        propPadding="6px 15px"
        propFlex="1"
        propBoxShadow="0px 2px 16px rgba(0, 0, 0, 0.08)"
        propBackgroundColor="#fff"
        propOverflow="hidden"
        propMinWidth="71px"
        prop="GraphFleet"
        propDisplay="inline-block"
        propMinWidth1="78px"
        propFlex1="unset"
        propColor="#007aff"
        propTextDecoration="none"
        propFontWeight="700"
        divFontFamily="'SF Compact Rounded'"
      />
      <Bars
        propWidth="unset"
        propFlexDirection="row"
        propPadding="6px 15px"
        propFlex="1"
        propBoxShadow="unset"
        propBackgroundColor="unset"
        propOverflow="unset"
        propMinWidth="77px"
        prop="AgenticFleet"
        propDisplay="inline-block"
        propMinWidth1="88px"
        propFlex1="unset"
        propColor="#000"
        propTextDecoration="none"
        propFontWeight="600"
        divFontFamily="'SF Compact Rounded'"
      />
      <Bars
        propWidth="unset"
        propFlexDirection="row"
        propPadding="6px 15px"
        propFlex="unset"
        propBoxShadow="unset"
        propBackgroundColor="unset"
        propOverflow="unset"
        propMinWidth="unset"
        prop="Insights"
        propDisplay="inline-block"
        propMinWidth1="57px"
        propFlex1="unset"
        propColor="#000"
        propTextDecoration="none"
        propFontWeight="600"
        divFontFamily="'SF Compact Rounded'"
      />
      <Bars
        propWidth="unset"
        propFlexDirection="row"
        propPadding="6px 15px"
        propFlex="unset"
        propBoxShadow="unset"
        propBackgroundColor="unset"
        propOverflow="unset"
        propMinWidth="unset"
        prop="Manage"
        propDisplay="inline-block"
        propMinWidth1="55px"
        propFlex1="unset"
        propColor="#000"
        propTextDecoration="none"
        propFontWeight="600"
        divFontFamily="'SF Compact Rounded'"
      />
      <Bars prop="􀊫" />
    </nav>
  );
};

export default TabBar;
