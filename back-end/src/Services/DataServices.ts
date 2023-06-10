import { data, reading, sensors } from "../Interfaces/SensorInterface.js";
import DataRepository from "../Repositories/DataRepository.js";

class DataServices {
  private repository = new DataRepository();

  public async saveData(data: reading): Promise<reading | void> {
    return await this.repository.createData(data);
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
