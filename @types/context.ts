import { Context as OakContext } from "../deps.ts";
import { AuthUser } from "./auth/auth-user.ts";

/**
 * @description Custom Context for application
 */
export class Context extends OakContext {
  user?: AuthUser;
}
