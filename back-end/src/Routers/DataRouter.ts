import { Request, Response, Router } from "express";
import SensorsController from "../Controllers/SensorController.js";

class DataRouter {
  public router: Router;
  public url: string;
  private controller: SensorsController;

  constructor() {
    this.router = Router();
    this.controller = new SensorsController();
    this.url = "/data";
    this.initialize();
  }

  private initialize() {
    this.router.get(this.url, async (req: Request, res: Response) => {
      await this.controller.getData(req, res);
    });
    this.router.post(this.url, async (req: Request, res: Response) => {
      await this.controller.postData(req, res);
    });
  }
}

export default DataRouter;
