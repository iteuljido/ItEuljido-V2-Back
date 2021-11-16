import { FieldValue } from "../deps.ts";
import { User } from "../models/user.ts";

/**
 * get user by github id
 */
export const getUserByGithubId = async (github_id: number) => {
  let user = await User.where("github_id", github_id).get();

  if (!user) {
    return null;
  } else if (Array.isArray(user)) {
    user = user[0];
  }

  return user;
};

/**
 * create user
 */
export const createUser = async ({
  login,
  avatar_url,
  name
}: {
  login: string;
  avatar_url: string;
  name: string;
}) => {
  const { lastInsertId } = await User.create({
    github_id: login,
    profile_image: avatar_url,
    name
  });

  return await User.find(lastInsertId as FieldValue);
};
