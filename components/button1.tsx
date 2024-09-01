import type { NextPage } from "next";
import { Button } from "@mui/material";

export type Button1Type = {
  className?: string;
};

const Button1: NextPage<Button1Type> = ({ className = "" }) => {
  return (
    <Button
      className={`h-[50px] flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#007aff",
        fontSize: "17",
        background: "rgba(120, 120, 128, 0.12)",
        borderRadius: "12px",
        "&:hover": { background: "rgba(120, 120, 128, 0.12)" },
        height: 50,
      }}
    >
      Button
    </Button>
  );
};

export default Button1;
