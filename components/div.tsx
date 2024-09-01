import type { NextPage } from "next";
import InputTypetextNametext from "./input-typetext-nametext";
import StfileUploader from "./stfile-uploader";
import ButtonComponent from "./button-component";
import TagToggle from "./tag-toggle";

export type DivType = {
  className?: string;
};

const Div: NextPage<DivType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1065px] rounded-radius-l max-w-full flex flex-col items-start justify-start pt-0 px-0 pb-[186px] box-border gap-[37px] leading-[normal] tracking-[normal] text-left text-smi text-labels-secondary font-single-line-body-base mq725:gap-[18px] ${className}`}
    >
      <header className="self-stretch [backdrop-filter:blur(100px)] flex flex-row items-end justify-start pt-[23px] pb-0 pl-4 pr-0 box-border max-w-full text-left text-mid text-text-colors-text-primary font-subheadline-emphasized">
        <div className="flex-1 border-separators-non-opaque border-b-[0.3px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-0.5 max-w-full">
          <div className="relative tracking-[-0.43px] leading-[22px] font-semibold whitespace-nowrap">
            Knowledge base
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pl-4 pr-spacing-8 box-border gap-[9px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2 box-border max-w-full">
          <div className="flex-1 relative tracking-[-0.4px] leading-[18px] font-semibold inline-block max-w-full">
            Root Directory
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <InputTypetextNametext
            placeholder="Enter your root directory"
            propAlignSelf="stretch"
            text="Enter your root directory"
            showText
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-mid">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-2 pr-0 box-border max-w-full">
          <div className="flex-1 relative tracking-[-0.4px] leading-[22px] font-semibold inline-block max-w-full">
            Import new data
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-spacing-16 pr-[812px] gap-2 mq450:pr-spacing-16 mq450:box-border mq725:pr-spacing-16 mq725:box-border mq1000:flex-wrap">
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
      <StfileUploader />
      <section className="self-stretch [backdrop-filter:blur(100px)] flex flex-col items-start justify-center py-0 px-2.5 box-border gap-[21px] max-w-full text-left text-mid text-labels-secondary font-single-line-body-base">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-2 pr-0 box-border max-w-full">
          <div className="flex-1 relative tracking-[-0.4px] leading-[22px] font-semibold inline-block max-w-full">
            Select your index
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-2 max-w-full mq450:flex-wrap">
          <InputTypetextNametext
            placeholder="Enter your root directory"
            text="Enter your root directory"
            showText
          />
          <ButtonComponent hasIconEnd hasIconStart={false} label="Send" />
        </div>
        <footer className="self-stretch rounded-radius-sm bg-background-opaque-tertiary flex flex-row items-start justify-start flex-wrap content-start py-2 pl-2 pr-[439px] gap-2 mq450:pr-5 mq450:box-border mq725:pr-[219px] mq725:box-border">
          <TagToggle
            label="#research_paper"
            propFlex="1"
            propMinWidth="46px"
            propMinWidth1="104px"
          />
          <TagToggle
            label="#graphrag"
            propFlex="unset"
            propMinWidth="unset"
            propMinWidth1="64px"
          />
          <TagToggle
            label="#prompt"
            propFlex="unset"
            propMinWidth="unset"
            propMinWidth1="53px"
          />
          <TagToggle
            label="#graphrag_index"
            propFlex="1"
            propMinWidth="46px"
            propMinWidth1="104px"
          />
          <TagToggle
            label="#multi-agents"
            propFlex="unset"
            propMinWidth="unset"
            propMinWidth1="86px"
          />
          <TagToggle label="#agentic_fleet" />
        </footer>
      </section>
    </div>
  );
};

export default Div;
