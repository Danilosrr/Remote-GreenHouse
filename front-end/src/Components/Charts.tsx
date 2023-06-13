import { Box } from "@mui/material";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import { data } from "../Services/Socket";

interface Props {
  data: data[];
}

export default function Charts({ data }: Props) {
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
