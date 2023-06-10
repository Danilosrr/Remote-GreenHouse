import { Request, Response } from "express";
import SensorServices from "../Services/SensorServices.js";

class SensorsControllers {
  private service = new SensorServices();

  public async getData(req: Request, res: Response): Promise<Response<any[]>> {
    console.log("Get Data");
    return res.send([]);
  }
  
  public async postData(req: Request, res: Response): Promise<Response<void>> {
    const { temperature, humidity, name }: { temperature: string; humidity: string, name:string } = req.body;
    console.log(temperature,humidity,name)
    if(!!+temperature && !!+humidity) return res.sendStatus(200);
    else return res.sendStatus(400);
  }
  
  public async getSensors(req: Request, res: Response): Promise<Response<any[]>> {
    const sensors = await this.service.getSensors();  
    return res.send(sensors);
  }


  public async postSensor(req: Request, res: Response): Promise<Response<void>> {
      const {name}:{name:string} = req.body;
      await this.service.createSensor(name);
      return res.sendStatus(201);
  }
}

export default SensorsControllers;
