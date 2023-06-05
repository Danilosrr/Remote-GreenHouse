import { Request, Response } from "express";

class SensorsControllers {
  public getAll(req: Request, res: Response): Response<[]> {
    return res.send([]);
  }
}

export default SensorsControllers;
