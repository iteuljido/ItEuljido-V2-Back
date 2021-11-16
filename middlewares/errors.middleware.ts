import { Context } from "../@types/context.ts";
import { ErrorResponse } from "../@types/error-response.ts";
import { isHttpError, Status } from "../deps.ts";

const errorHandle = async (ctx: Context, next: () => Promise<unknown>) => {
  try {
    await next();

    const status = ctx.response.status || Status.NotFound;

    if (status === Status.NotFound) {
      ctx.throw(Status.NotFound, "Not Found!");
    }
  } catch (err: any) {
    if (isHttpError(err)) {
      const { status, message } = err;

      ctx.response.status = status;
      ctx.response.body = new ErrorResponse(status, message);
    }
  }
};

export { errorHandle };
