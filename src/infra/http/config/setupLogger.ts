import { logger } from "@grotto/logysia";
import Elysia from "elysia";

export const setupLogger = new Elysia({ name: 'setupLogger' })
    .use(
        logger({logIP: true})
    )
