import axios from "axios";

export type sensor = {
  name: string;
};

async function getSensors() {
  const url = `http://localhost:${process.env.REACT_APP_BACK}/sensors`;
  return await axios.get(url);
}

export const api = {
  getSensors,
};
