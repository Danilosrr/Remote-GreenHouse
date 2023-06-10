import { Router } from "express";
import SensorRouter from "./SensorRouter.js";
import DataRouter from "./DataRouter.js";

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

    const dataRoute = new DataRouter();
    this.router.use(dataRoute.router);
  }
}

export default Routers;
