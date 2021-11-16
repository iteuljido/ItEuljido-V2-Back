import { AuthLogin } from "../@types/auth/auth-login.ts";
import { Context } from "../@types/context.ts";
import { required, Router } from "../deps.ts";
import { requestValidator as validator } from "../middlewares/validator.middleware.ts";
import * as authService from "../services/auth.service.ts";

const loginSchema = {
  code: [required]
};

const login = async ({ request, response }: Context) => {
  const body = (await request.body().value) as AuthLogin;
  const user = await authService.login(body);
  response.body = user;
};

const router = new Router();

router.post("/", validator({ body: loginSchema }), login);

export default router;
