import { AuthLogin } from "../@types/auth/auth-login.ts";
import { FieldValue, httpErrors } from "../deps.ts";
import { githubLogin } from "../helpers/github-login.helper.ts";
import { User } from "../models/user.ts";
import * as userRepo from "../repositories/user.repository.ts";

/**
 * login or register
 */
export const login = async (body: AuthLogin) => {
  const data = await githubLogin(body.code);

  try {
    let user = await userRepo.getUserByGithubId(data.login);

    if (!user) {
      user = await userRepo.createUser(data);
    }

    return user;
  } catch (err) {
    throw new httpErrors.InternalServerError(err);
  }
};
