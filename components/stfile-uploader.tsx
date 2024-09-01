import type { NextPage } from "next";

const StfileUploader: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-[470px] h-[116px] flex flex-col items-start justify-start gap-2 max-w-full text-sm text-gray-100 font-source-sans-pro w-[470px] h-[116px] flex flex-col items-start justify-start gap-2 max-w-full text-sm text-gray-60 font-source-sans-pro text-center ${className}`}
    >
      <label className="cursor-pointer cursor-pointer" for="file-2546:4556">
        <div className="w-[470px] h-6 flex flex-row items-center justify-start gap-2 w-[470px] h-6 flex flex-row items-center justify-start gap-2">
          <div className="h-6 flex-1 relative leading-[24px] flex items-center h-6 flex-1 relative leading-[24px] flex items-center">
            Label goes here
          </div>
          <div className="h-5 w-5 flex flex-col items-center justify-end gap-2 text-center h-5 w-5 flex flex-col items-center justify-end gap-2">
            <div className="shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] rounded bg-grays-white hidden flex-row items-start justify-start p-2 whitespace-nowrap shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] rounded bg-grays-white hidden flex-row items-start justify-start p-2 whitespace-nowrap">
              <div className="relative leading-[24px] whitespace-nowrap relative leading-[24px] whitespace-nowrap">
                Help message goes here
              </div>
            </div>
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 w-5 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-6.svg"
            />
          </div>
        </div>
        <div className="w-[470px] h-[84px] rounded bg-gray-20 flex flex-row items-center justify-start p-4 box-border gap-4 text-center text-base text-labels-primary w-[470px] h-[84px] rounded bg-gray-20 flex flex-row items-center justify-start p-4 box-border gap-4">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 h-8 w-8 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/upload.svg"
          />
          <div className="h-[52px] flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[121px] box-border gap-1 h-[52px] flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[121px] box-border gap-1">
            <div className="w-36 h-6 relative leading-[24px] flex items-center justify-center w-36 h-6 relative leading-[24px] flex items-center justify-center">
              Drag an drop file here
            </div>
            <div className="w-[116px] h-6 relative text-sm leading-[24px] text-gray-60 flex items-center justify-center w-[116px] h-6 relative leading-[24px] flex items-center justify-center">
              Limit 200MB per file
            </div>
          </div>
          <Button
            className="h-10 w-[109px] h-10 w-[109px] h-10 w-[109px]"
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
      <input className="hidden hidden" type="file" id="file-2546:4556" />
    </div>
  );
};

export default StfileUploader;
