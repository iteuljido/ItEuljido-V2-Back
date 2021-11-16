import { UserDepartment } from "../user/user-department.ts";
import { UserRole } from "../user/user-role.ts";
import { UserSchool } from "../user/user-school.ts";
import { UserSex } from "../user/user-sex.ts";

/**
 * @description User type
 */
export type AuthUser = {
  /** user id */
  id: number;

  /** user name */
  name: string;

  /** profile image */
  profile_image: string;

  /** short description */
  description: string | null;

  /** generation */
  generation: number | null;

  /** department */
  department: UserDepartment | null;

  /** user school */
  school: UserSchool | null;

  /** sex */
  sex: UserSex | null;

  /** user role */
  role: UserRole | null;

  /** authorized */
  is_authorized: boolean;
};
