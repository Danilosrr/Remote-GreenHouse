import { Request, Response } from "express";
import SensorServices from "../Services/SensorServices.js";
import DataServices from "../Services/DataServices.js";
import { data, sensors } from "../Interfaces/SensorInterface.js";

class SensorsControllers {
  private sensorService = new SensorServices();
  private dataService = new DataServices();

  public async getData(req: Request, res: Response): Promise<Response<data[]>> {
    const limit: number = +req.query.limit;
    const filter = String(req.query.filter);
    const data :data[] = await this.dataService.getData(limit,filter)
    return res.send(data);
  }
  
  public async postData(req: Request, res: Response): Promise<Response<void>> {
    const { temperature, humidity, name }: { temperature: string; humidity: string, name:string } = req.body;
    console.log(temperature,humidity,name)
    if(!!+temperature && !!+humidity) this.dataService.saveData({name,temperature:+temperature,humidity:+humidity}) 
    return res.sendStatus(200);
  }
  
  public async getSensors(req: Request, res: Response): Promise<Response<any[]>> {
    const sensors: sensors[] = await this.sensorService.getSensors();  
    return res.send(sensors);
  }


  public async postSensor(req: Request, res: Response): Promise<Response<void>> {
      const {name}:{name:string} = req.body;
      await this.sensorService.createSensor(name);
      return res.sendStatus(201);
  }
}

export default SensorsControllers;
