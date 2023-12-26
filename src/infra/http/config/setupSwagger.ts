import swagger from "@elysiajs/swagger";
import Elysia from "elysia";

export const setupSwagger = new Elysia({ name: 'setupSwagger' }).use(
  swagger()
)