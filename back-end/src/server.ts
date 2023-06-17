import App from "./app.js";
import { configDotenv } from "dotenv";
configDotenv({path:'../front-end/.env'})

const server = new App(+process.env.REACT_APP_BACK || 4000)

export const app = server.initialize();