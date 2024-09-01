import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type GroupedHeaderType = {
  className?: string;
};

const GroupedHeader: NextPage<GroupedHeaderType> = ({ className = "" }) => {
  return (
    <TextField
      className={`[border:none] bg-[transparent] self-stretch h-[46px] font-sf-compact font-semibold text-mini text-labels-secondary ${className}`}
      placeholder="GraphFleet"
      variant="outlined"
      sx={{
        "& fieldset": { border: "none" },
        "& .MuiInputBase-root": {
          height: "46px",
          borderRadius: "0px 0px 0px 0px",
          fontSize: "15px",
        },
        "& .MuiInputBase-input": { color: "rgba(60, 60, 67, 0.6)" },
      }}
    />
  );
};

export default GroupedHeader;
