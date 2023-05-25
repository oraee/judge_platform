import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Timer = (props: { expTime: number; onTimeOut: () => void }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(props.expTime - new Date().getTime());
  }, [props.expTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer < 0) {
      props.onTimeOut();
    }
  }, [timer]);

  return (
    <>
      {timer > 0 && (
        <Typography variant="h6">
          {Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} :{" "}
          {Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))} :{" "}
          {Math.floor((timer % (1000 * 60)) / 1000)}
        </Typography>
      )}
    </>
  );
};
