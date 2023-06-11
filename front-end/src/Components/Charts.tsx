import { Box } from "@mui/material";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";

export default function Charts() {
  const data = [
    {
      name: "Page A",
      temperature: 40.0,
      humidity: 24.0,
      time: new Date("2023-06-10 18:38:33.54").toUTCString(),
    },
    {
      name: "Page B",
      temperature: 30.0,
      humidity: 13.98,
      time: new Date("2023-06-10 18:38:43.54").toUTCString(),
    },
    {
      name: "Page C",
      temperature: 20.0,
      humidity: 98.0,
      time: new Date("2023-06-10 18:38:53.54").toUTCString(),
    },
    {
      name: "Page D",
      temperature: 27.8,
      humidity: 39.08,
      time: new Date("2023-06-10 18:39:03.54").toUTCString(),
    },
    {
      name: "Page E",
      temperature: 18.9,
      humidity: 48.0,
      time: new Date("2023-06-10 18:39:13.54").toUTCString(),
    },
    {
      name: "Page F",
      temperature: 23.9,
      humidity: 38.0,
      time: new Date("2023-06-10 18:39:23.54").toUTCString(),
    },
    {
      name: "Page G",
      temperature: 34.9,
      humidity: 43.0,
      time: new Date("2023-06-10 18:39:33.54").toUTCString(),
    },
  ];
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
