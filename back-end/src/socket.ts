import { Server } from "socket.io";
import DataRepository from "./Repositories/DataRepository.js";
import { configDotenv } from "dotenv";
configDotenv({path:'../front-end/.env'})

export const io = new Server({
  cors: {
    origin: `http://localhost:${process.env.PORT}`,
    methods: ["GET", "POST"]
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

  socket.on("leave", async (data) => {
    const { name }: { name: string } = data;
    console.log("sensor disconnected");
    socket.leave(name);
  });
});
