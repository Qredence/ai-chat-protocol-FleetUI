import type { NextPage } from "next";
import Nav from "../components/nav";
import GroupedHeader from "../components/grouped-header";
import SidebarRow from "../components/sidebar-row";
import Trailing from "../components/trailing";
import Button1 from "../components/button1";

const GraphFleetQuery: NextPage = () => {
  return (
    <div className="w-full relative bg-grays-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Nav />
      <main className="self-stretch flex flex-row items-start justify-start p-spacing-16 box-border gap-spacing-24 max-h-[900px] max-w-full text-left text-mid text-colors-blue font-subheadline-emphasized mq1025:pl-spacing-16 mq1025:pr-spacing-16 mq1025:box-border">
        <div className="h-[796px] w-72 bg-opaque-secondary flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border gap-2 max-w-[300px] mq1025:hidden">
          <div className="self-stretch flex-1 rounded-radius-l flex flex-col items-start justify-start pt-0 px-0 pb-[396px] gap-2 mq750:pb-[257px] mq750:box-border">
            <GroupedHeader />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-spacing-8">
              <SidebarRow
                icon="/icon-1.svg"
                text="Ask your data"
                showIcon
                propPadding="0px 26px 0px 0px"
                propColor="#000"
                propMinWidth="96px"
                detail="Detail"
                trailingSymbol="􀓔"
                showSymbol={false}
                showDetail={false}
              />
              <SidebarRow
                icon="/icon-2.svg"
                text="New data"
                showIcon
                propPadding="0px 56px 0px 0px"
                propColor="rgba(0, 0, 0, 0.85)"
                propMinWidth="66px"
                detail="Detail"
                trailingSymbol="􀓔"
                showSymbol={false}
                showDetail={false}
              />
              <SidebarRow
                icon="/icon-1.svg"
                text="Indexing Setup "
                showIcon
                propPadding="0px 18px 0px 0px"
                propColor="#000"
                propMinWidth="104px"
                detail="Detail"
                trailingSymbol="􀓔"
                showSymbol={false}
                showDetail={false}
              />
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-0 px-spacing-8">
                <div className="self-stretch rounded-[11px] bg-fills-tertiary flex flex-row items-center justify-center py-0 px-2 gap-2">
                  <div className="flex flex-row items-center justify-start py-0 pl-0 pr-2.5 gap-2.5">
                    <input
                      className="m-0 h-6 w-6 relative min-h-[24px]"
                      type="checkbox"
                    />
                    <div className="relative tracking-[-0.43px] leading-[22px] font-semibold inline-block min-w-[112px]">
                      API endpoints
                    </div>
                  </div>
                  <Trailing
                    showSymbol={false}
                    detail="Detail"
                    showDetail={false}
                    trailingSymbol="􀓔"
                  />
                </div>
              </div>
              <SidebarRow
                icon="/icon-1.svg"
                text="Knowledge Agent"
                showIcon
                detail="Detail"
                trailingSymbol="􀓔"
                showSymbol={false}
                showDetail={false}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
            <Button1 />
          </div>
        </div>
        <section className="flex-1 rounded-radius-sm bg-grays-white flex flex-col items-center justify-start pt-0 px-spacing-24 pb-spacing-16 box-border max-w-[calc(100%_-_312px)] text-left text-mid text-labels-secondary font-single-line-body-base mq1025:max-w-full">
          <div className="self-stretch rounded-radius-l flex flex-col items-start justify-start pt-0 px-0 pb-[186px] box-border gap-[37px] max-w-full mq1025:pb-[121px] mq1025:box-border mq450:pb-[79px] mq450:box-border mq750:gap-[18px]">
            <div className="self-stretch [backdrop-filter:blur(100px)] flex flex-row items-end justify-start pt-[23px] pb-0 pl-4 pr-0 box-border max-w-full text-text-colors-text-primary font-subheadline-emphasized">
              <div className="flex-1 border-separators-non-opaque border-b-[0.3px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-0.5 max-w-full">
                <a className="[text-decoration:none] relative tracking-[-0.43px] leading-[22px] font-semibold text-[inherit]">
                  Knowledge base
                </a>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-4 pr-spacing-8 box-border gap-[9px] max-w-full text-smi">
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-2 box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.4px] leading-[18px] font-semibold inline-block max-w-full">
                  Root Directory
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-mini text-darkslategray">
                <div className="self-stretch [backdrop-filter:blur(24.5px)] rounded-radius-sm bg-fills-emphased-quaternary flex flex-row items-center justify-start p-2.5">
                  <div className="w-[271px] relative flex items-center shrink-0">
                    Enter your root directory
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-2 pr-0 box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.4px] leading-[22px] font-semibold inline-block max-w-full">
                  Import new data
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-spacing-16 pr-[812px] gap-2 mq1100:flex-wrap mq1100:pr-spacing-16 mq1100:box-border mq450:pr-spacing-16 mq450:box-border mq750:pr-spacing-16 mq750:box-border">
                <button className="cursor-pointer [border:none] py-[7px] px-3.5 bg-fills-tertiary rounded-radius-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gray-400">
                  <div className="relative text-mini tracking-[-0.23px] leading-[20px] font-semibold font-subheadline-emphasized text-colors-blue text-left inline-block min-w-[102px]">
                    Add New Data
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[7px] px-3.5 bg-fills-tertiary rounded-radius-sm flex flex-row items-center justify-center hover:bg-gray-400">
                  <div className="relative text-mini tracking-[-0.23px] leading-[20px] font-semibold font-subheadline-emphasized text-text-colors-text-primary text-left inline-block min-w-[71px]">
                    Configure
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[470px] h-[116px] flex flex-col items-start justify-start gap-2 max-w-full text-sm text-gray-100 font-source-sans-pro">
              <label className="cursor-pointer" for="file-2546:4556">
                <div className="w-[470px] h-6 flex flex-row items-center justify-start gap-2">
                  <div className="h-6 flex-1 relative leading-[24px] flex items-center">
                    Label goes here
                  </div>
                  <div className="h-5 w-5 flex flex-col items-center justify-end gap-2 text-center">
                    <div className="shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] rounded bg-grays-white hidden flex-row items-start justify-start p-2 whitespace-nowrap">
                      <div className="relative leading-[24px] whitespace-nowrap">
                        Help message goes here
                      </div>
                    </div>
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon-6.svg"
                    />
                  </div>
                </div>
                <div className="w-[470px] h-[84px] rounded bg-gray-20 flex flex-row items-center justify-start p-4 box-border gap-4 text-center text-base text-labels-primary">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/upload.svg"
                  />
                  <div className="h-[52px] flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[121px] box-border gap-1">
                    <div className="w-36 h-6 relative leading-[24px] flex items-center justify-center">
                      Drag an drop file here
                    </div>
                    <div className="w-[116px] h-6 relative text-sm leading-[24px] text-gray-60 flex items-center justify-center">
                      Limit 200MB per file
                    </div>
                  </div>
                  <Button
                    className="h-10 w-[109px]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#262730",
                      fontSize: "16",
                      background: "#fff",
                      border: "#d5dae5 solid 1px",
                      borderRadius: "4px",
                      "&:hover": { background: "#fff" },
                      width: 109,
                      height: 40,
                    }}
                  >
                    Browse File
                  </Button>
                </div>
              </label>
              <input className="hidden" type="file" id="file-2546:4556" />
            </div>
            <div className="self-stretch [backdrop-filter:blur(100px)] flex flex-col items-start justify-center py-0 px-2.5 box-border gap-[21px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-2 pr-0 box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.4px] leading-[22px] font-semibold inline-block max-w-full">
                  Select your index
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2 max-w-full text-mini text-darkslategray mq450:flex-wrap">
                <div className="[backdrop-filter:blur(24.5px)] rounded-radius-sm bg-fills-emphased-quaternary flex flex-row items-center justify-start py-2.5 pl-2.5 pr-0 whitespace-nowrap">
                  <div className="w-[271px] relative flex items-center shrink-0">
                    Enter your root directory
                  </div>
                </div>
                <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-1.5 px-[7px] bg-text-colors-text-primary w-[79px] rounded-inputarea-button-border-radius box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-space-200">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[39px]">
                    Send
                  </div>
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/paperplaneright.svg"
                  />
                </button>
              </div>
              <footer className="self-stretch rounded-radius-sm bg-background-opaque-tertiary flex flex-row items-start justify-start flex-wrap content-start py-2 pl-2 pr-[439px] gap-2 text-left text-smi text-text-colors-text-primary font-single-line-body-base mq1100:pr-[219px] mq1100:box-border mq450:pr-5 mq450:box-border mq750:pr-[109px] mq750:box-border">
                <div className="flex-1 shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px] box-border min-w-[46px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[104px]">
                    #research_paper
                  </div>
                </div>
                <div className="shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[64px]">
                    #graphrag
                  </div>
                </div>
                <div className="shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[53px]">
                    #prompt
                  </div>
                </div>
                <div className="flex-1 shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px] box-border min-w-[46px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[104px]">
                    #graphrag_index
                  </div>
                </div>
                <div className="shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[86px]">
                    #multi-agents
                  </div>
                </div>
                <div className="shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.06)] rounded-[5.33px] bg-opaque-secondary flex flex-row items-center justify-center py-1.5 px-[5px]">
                  <div className="relative tracking-[-0.27px] leading-[14px] font-semibold inline-block min-w-[87px]">
                    #agentic_fleet
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GraphFleetQuery;
