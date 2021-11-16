import { DataTypes, Model } from "../deps.ts";
import {
  DaeguUserDepartment,
  DaedeokUserDepartment,
  GwangjuUserDepartment,
  BusanUserDepartment
} from "../@types/user/user-department.ts";
import { UserSchool } from "../@types/user/user-school.ts";
import { UserSex } from "../@types/user/user-sex.ts";
import { UserRole } from "../@types/user/user-role.ts";
import { UserPosition } from "../@types/user/user-position.ts";

// deno-lint-ignore no-explicit-any
const departmentKeys: Array<any> = [
  Object.values(DaeguUserDepartment),
  Object.values(DaedeokUserDepartment),
  Object.values(GwangjuUserDepartment),
  Object.values(BusanUserDepartment)
];
const departmentArray = [...new Set([].concat.apply([], departmentKeys))];
const schoolArray = Object.values(UserSchool);
const sexArray = Object.values(UserSex);
const roleArray = Object.values(UserRole);
const positionArray = Object.values(UserPosition);

export class User extends Model {
  static table = "user";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    github_id: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING, length: 50 },
    description: { type: DataTypes.STRING, length: 50, allowNull: true },
    generation: { type: DataTypes.INTEGER, length: 5, allowNull: true },
    department: { type: DataTypes.ENUM, values: [...departmentArray], allowNull: true },
    school: { type: DataTypes.ENUM, values: [...schoolArray], allowNull: true },
    sex: { type: DataTypes.ENUM, values: [...sexArray], allowNull: true },
    role: { type: DataTypes.ENUM, values: [...roleArray], allowNull: true },
    position: { type: DataTypes.ENUM, values: [...positionArray], allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true },
    is_authorized: { type: DataTypes.BOOLEAN },
    profile_image: DataTypes.STRING
  };

  static defaults = {
    is_authorized: false,
    role: UserRole.DEFAULT
  };
}
