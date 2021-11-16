import { Router } from "../deps.ts";
import auth from "./auth.controller.ts";

const router = new Router();

router.use("/api/auth", auth.routes());
router.use("/api/auth", auth.allowedMethods());

export default router;
