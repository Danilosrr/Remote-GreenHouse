import { Request, Response, Router } from "express";
import SensorsController from "../Controllers/SensorController.js";

class SensorRouter {
  public router: Router;
  public url: string;
  private controller: SensorsController;

  constructor() {
    this.router = Router();
    this.controller = new SensorsController();
    this.url = "/sensors";
    this.initialize();
  }

  private initialize() {
    this.router.get(this.url, async (req: Request, res: Response) => {
      await this.controller.getSensors(req, res);
    });
    this.router.post(this.url, async (req: Request, res: Response) => {
      await this.controller.postSensor(req, res);
    });
  }
}

export default SensorRouter;
