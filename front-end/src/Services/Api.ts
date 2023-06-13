import axios from "axios";

export type sensor = {
  name: string;
};

async function getSensors() {
  const url = `http://localhost:4000/sensors`;
  return await axios.get(url);
}

export const api = {
  getSensors,
};
