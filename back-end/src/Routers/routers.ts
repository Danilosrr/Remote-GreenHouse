import { Router } from "express";
import SensorRouter from "./sensorRouter.js";

class Routers {
  public router: Router;
  private url = "";

  constructor() {
    this.router = Router();
    this.initialize();
  }

  private initialize() {
    const sensorsRoute = new SensorRouter();
    this.router.use(sensorsRoute.router);
  }
}

export default Routers;
