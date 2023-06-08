import { Router } from "express";
import SensorsController from "../Controllers/sensorController.js";


class SensorRouter {
    public router: Router;
    public url: string;
    private controller = new SensorsController();
  
    constructor() {
      this.router = Router();
      this.url = "/sensors";
      this.initialize();
    }
  
    private initialize() {
      this.router.get(this.url, this.controller.getAll);
      this.router.post(this.url, this.controller.receiveData);
    }
  }
  
export default SensorRouter;