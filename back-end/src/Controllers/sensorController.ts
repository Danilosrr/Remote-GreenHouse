import { Request, Response } from "express";

class SensorsControllers {
  public getAll(req: Request, res: Response): Response<any[]> {
    console.log("Get controller");
    return res.send([]);
  }
  public receiveData(req: Request, res: Response): Response<void> {
    const { temperature, humidity }: { temperature: string; humidity: string } = req.body;
    if(!!+temperature && !!+humidity) console.log("Data received",temperature,humidity);
    return res.sendStatus(200);
  }
}

export default SensorsControllers;
