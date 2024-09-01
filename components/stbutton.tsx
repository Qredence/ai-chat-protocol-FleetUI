import type { NextPage } from "next";
import { Button } from "@mui/material";

const Stbutton: NextPage = ({ className = "" }) => {
  return (
    <Button
      className={`h-10 w-[109px] h-10 w-[109px] ${className}`}
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
  );
};

export default Stbutton;
