import { Server } from "socket.io";
import DataRepository from "./Repositories/DataRepository.js";

export const io = new Server({
  cors: {
    origin: "*",
  },
});

io.listen(+process.env.SOCKET);

io.on("connection", (socket) => {
  console.log(`socket is listening on port ${process.env.SOCKET}`);

  socket.on("selectSensor", async (data, callback) => {
    console.log("sensor selected");
    const { name }: { name: string } = data;
    const repository = new DataRepository();

    socket.join(name);

    const sensorReadings = await repository.listSensorData(100, name);
    callback(sensorReadings);
  });

  socket.on("newData", async (data) => {
    console.log("new sensor reading");
  });
});
