import { data, reading } from "../Interfaces/SensorInterface.js";
import DataRepository from "../Repositories/DataRepository.js";
import { io } from "../socket.js";

class DataServices {
  private repository = new DataRepository();

  public async saveData(data: reading): Promise<reading | void> {
    const saveData = await this.repository.createData(data);
    if (saveData) io.to(saveData.name).emit("newData", saveData);
    return saveData;
  }

  public async getData(limit: number, filter?: string): Promise<data[]> {
    if (isNaN(limit)) limit = 100;
    if (filter != "undefined") {
      const data = await this.repository.listSensorData(limit, filter);
      console.log(data);
      return data;
    } else {
      const data = await this.repository.listData(limit);
      console.log(data);
      return data;
    }
  }
}

export default DataServices;
