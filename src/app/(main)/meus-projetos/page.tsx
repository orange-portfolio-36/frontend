import Profile from "@/components/user/Profile/Profile";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Projects() {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Box display={"flex"} marginTop={"112px"}>
        <Profile />
      </Box>
    </Box>
  );
}
