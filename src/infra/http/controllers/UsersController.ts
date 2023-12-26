import Elysia, { t } from "elysia";

export const UsersController = new Elysia()
  .post("/users", ({body}) => {
    return body
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      password: t.String(),
    })
  })