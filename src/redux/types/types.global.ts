import { TUserRole } from "@/constant/constant.global";

export interface TLoginData {
  email: string;
  password: string;
}

export interface TJwtPayload {
  email: string;
  role: TUserRole;
  iat?: number;
  exp?: number;
}
