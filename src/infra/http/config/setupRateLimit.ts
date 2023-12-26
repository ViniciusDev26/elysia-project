import Elysia from "elysia";
import { rateLimit } from "elysia-rate-limit";

export const setupRateLimit = new Elysia({ name: 'setupRateLimit' }).use(rateLimit({
  max: 1,
  countFailedRequest: true,
}))