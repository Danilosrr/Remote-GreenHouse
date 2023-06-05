import App from "./app.js";

const server = new App(+process.env.PORT || 4000)

export const app = server.initialize();