import { Elysia } from "elysia";
import { UsersController } from "./controllers/UsersController";
import { setupLogger, setupRateLimit, setupSwagger } from "./config";

const app = new Elysia()
  .use(setupLogger)
  .use(setupSwagger)
  .use(setupRateLimit)
  .use(UsersController)
  .listen(3000);
export type App = typeof app 

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

