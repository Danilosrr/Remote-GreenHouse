import { useTheme } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
}

export default function HumidityChart({ data }: Props) {
  const theme = useTheme();
  const readings = data;
  return (
    <ResponsiveContainer width={"100%"} height={"49%"}>
      <AreaChart data={readings} margin={{ top: 10, right: 40 }} syncId={"id"}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="humidity" />
        <XAxis dataKey="none" />
        <Tooltip />
        <Legend />
        <Area
          type="linear"
          dataKey="humidity"
          stroke={theme.palette.secondary.main}
          fill={theme.palette.secondary.main}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
