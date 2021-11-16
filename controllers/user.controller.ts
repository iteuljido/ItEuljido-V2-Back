import { Context } from "../@types/context.ts";
import { isEmail, lengthBetween, required, Router } from "../deps.ts";
import { requestValidator as validator } from "../middlewares/validator.middleware.ts";

const registerSchema = {
  email: [required, isEmail],
  name: [required, lengthBetween(1, 20)],
  password: [required, lengthBetween(1, 512)]
};

const register = async (ctx: Context) => {
  const body = await ctx.request.body().value;
  ctx.response.body = body;
};

const router = new Router();

router.get("/", validator({ query: registerSchema }), register);

export default router;
