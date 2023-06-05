import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import handleErrors from "./Middlewares/errorHandler.js";
import Routers from "./Routers/routers.js";

class App {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    dotenv.config();
    this.port = port;
    this.app = express();
    this.middlewares();
    this.routers();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(handleErrors);
    console.log("Middlewares loaded");
  }

  routers() {
    const routers = new Routers();
    this.app.use(routers.router);
    console.log("Routers loaded");
  }

  public initialize() {
    return this.app.listen(this.port, () => {
      console.log(`server is listening on port ${this.port}`);
    });
  }
}

export default App;
