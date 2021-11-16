import { Router } from "../deps.ts";

const router = new Router();

router
  .get("/", ({ response }) => {
    response.body = "asdf";
  })
  .get("/list", ({ response }) => {
    response.body = "as";
  });

export default router;
