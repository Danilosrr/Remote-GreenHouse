import { Box } from "@mui/material";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import { useEffect, useState } from "react";
import socket from "../Config/Socket";
import { data, socketApi } from "../Services/Socket";

export default function Charts() {
  const [data, setData] = useState<data[]>([]);
  const sensorSelected = "Identifier"; //sensors selector to be implemented

  useEffect(() => {
    async function loadChart() {
      await socketApi.selectSensor(sensorSelected, setData);
      socket.emit("join", sensorSelected);
    }
    loadChart();
  }, [sensorSelected]);

  const addReading = (newReading: data) => {
    console.log(newReading);
    setData((data) => [...data, newReading]);
  };
  socketApi.useEventSubscription("newData", addReading);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f3f3f3",
          position: "absolute",
          width: "100%",
          top: 40,
          bottom: 0,
        }}
      >
        <TemperatureChart data={data} />
        <HumidityChart data={data} />
      </Box>
    </>
  );
}
