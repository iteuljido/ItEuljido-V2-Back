import { Router } from "../deps.ts";
import company from "./company.ts";

const router = new Router();

router.use("/api/company", company.routes());
router.use("/api/company", company.allowedMethods());

export default router;
