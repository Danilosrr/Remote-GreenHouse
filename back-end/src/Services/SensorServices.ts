import SensorRepository from "../Repositories/SensorsRepository.js";
import { Errors } from "../Middlewares/errorHandler.js";
import { sensors } from "../Interfaces/SensorInterface.js";

class SensorServices {
  private repository = new SensorRepository();
  public async createSensor(name: string): Promise<sensors | void> {
    const verify: sensors = await this.repository.findSensor(name);
    if (verify) Errors.conflictError();
    else return await this.repository.createSensor(name);
  }

  public async getSensors(): Promise<sensors[]> {
    const sensors: sensors[] = await this.repository.listSensors();
    return sensors;
  }
}

export default SensorServices;
