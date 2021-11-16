import { Router } from "../deps.ts";
import user from "./user.controller.ts";

const router = new Router();

router.use("/api/user", user.routes());
router.use("/api/user", user.allowedMethods());

export default router;
