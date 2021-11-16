/**
 * @description user department type
 */
export type UserDepartment =
  | DaeguUserDepartment
  | DaedeokUserDepartment
  | GwangjuUserDepartment
  | BusanUserDepartment;

/**
 * @description daegu user department enum
 */
export enum DaeguUserDepartment {
  SOFTWARE = "SOFTWARE",
  EMBEDDED = "EMBEDDED",
  AI = "AI"
}

/**
 * @description daedeok user department enum
 */
export enum DaedeokUserDepartment {
  SOFTWARE = "SOFTWARE",
  EMBEDDED = "EMBEDDED",
  SECURITY = "SECURITY"
}

/**
 * @description gwangju user department enum
 */
export enum GwangjuUserDepartment {
  SOFTWARE = "SOFTWARE",
  EMBEDDED = "EMBEDDED"
}

/**
 * @description busan user department enum
 */
export enum BusanUserDepartment {
  SOFTWARE = "SOFTWARE",
  EMBEDDED = "EMBEDDED"
}
