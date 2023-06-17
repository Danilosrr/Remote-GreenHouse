import { useEffect, useState } from "react";
import Charts from "../Components/Charts";
import SideBar from "../Components/SideBar";
import socket from "../Config/Socket";
import { data, socketApi } from "../Services/Socket";

export default function Home() {
  const [data, setData] = useState<data[]>([]);
  const [selectedSensor, setSelectedSensor] = useState<string>("");

  async function loadChart() {
    await socketApi.selectSensor(selectedSensor, setData);
    console.log("join",selectedSensor);
    socket.emit("join", selectedSensor);
  }

  useEffect(() => {
    loadChart();
    // eslint-disable-next-line
  }, [selectedSensor]);

  const addReading = (newReading: data) => {
    console.log(newReading);
    setData((data) => [...data, newReading]);
  };
  socketApi.useEventSubscription("newData", addReading);

  return (
    <>
      <SideBar
        selectedSensor={selectedSensor}
        setSelectedSensor={setSelectedSensor}
      />
      <Charts data={data} />
    </>
  );
}
