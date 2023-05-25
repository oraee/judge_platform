import React from "react";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import { Stack, Typography } from "@mui/material";

const EndTime = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <TimerOffIcon />

      <Typography>Time To Submit has ended</Typography>
    </Stack>
  );
};

export default EndTime;
