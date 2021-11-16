import { Context } from "../@types/context.ts";
import { getQuery, httpErrors, validate, ValidationErrors, ValidationRules } from "../deps.ts";

/**
 * @description Errors 객체를 하나의 string으로 가져온다.
 */
const getErrorMessage = (errors: ValidationErrors): string | undefined => {
  for (const attr in errors) {
    const attrErrors = errors[attr];
    for (const rule in attrErrors) {
      return attrErrors[rule] as string;
    }
  }
};

/**
 * @description request body, query가 일치하는지 검사 한다.
 */
export const requestValidator = ({
  body: bodyRules,
  query: queryRules
}: {
  body?: ValidationRules;
  query?: ValidationRules;
}) => {
  return async (ctx: Context, next: () => Promise<unknown>) => {
    const { request } = ctx;

    if (bodyRules) {
      const body = await request.body().value;
      const [isValid, errors] = await validate(body, bodyRules);

      if (!isValid) {
        const message = getErrorMessage(errors);

        throw new httpErrors.BadRequest(message);
      }
    }

    if (queryRules) {
      const query = getQuery(ctx, { mergeParams: true });
      const [isValid, errors] = await validate(query, queryRules);

      if (!isValid) {
        const message = getErrorMessage(errors);

        throw new httpErrors.BadRequest(message);
      }
    }

    await next();
  };
};
