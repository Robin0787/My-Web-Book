import { jwtDecode } from "jwt-decode";

const VerifyToken = (token: string) => {
  return jwtDecode(token);
};

export default VerifyToken;
