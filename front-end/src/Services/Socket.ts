import { useEffect } from "react";
import socket from "../Config/Socket";

type SocketEvents = {
  selectSensor: (data: string) => void;
  newData: (data: data) => void;
};
export type data = {
  name: string;
  humidity: number;
  temperature: number;
  time: Date;
};

function useEventSubscription<T extends keyof SocketEvents>(
  event: T,
  listener: SocketEvents[T]
) {
  useEffect(() => {
    socket.on(event, listener as any);
    return () => {
      socket.off(event, listener as any);
    };
  }, [event, listener]);
}

async function selectSensor(
  sensorName: string,
  setData: React.Dispatch<React.SetStateAction<any>>
) {
  socket.emit("selectSensor", { name: sensorName }, (response: data) => {
    setData(response);
  });
}

export const socketApi = {
  useEventSubscription,
  selectSensor,
};
