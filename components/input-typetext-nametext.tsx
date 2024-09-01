import type { NextPage } from "next";

const InputTypetextNametext: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`[backdrop-filter:blur(24.5px)] rounded-radius-sm bg-fills-emphased-quaternary flex flex-row items-center justify-start py-2.5 pl-2.5 pr-0 whitespace-nowrap [backdrop-filter:blur(24.5px)] rounded-radius-sm bg-fills-emphased-quaternary flex flex-row items-center justify-start py-2.5 pl-2.5 pr-0 whitespace-nowrap ${className}`}
    >
      <div className="w-[271px] relative flex items-center shrink-0 w-[271px] relative flex items-center shrink-0">
        Enter your root directory
      </div>
    </div>
  );
};

export default InputTypetextNametext;
