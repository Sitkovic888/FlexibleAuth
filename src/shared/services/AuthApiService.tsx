import { UserLoginDto } from "@/shared/models/user-login.interface";
import { UserIdentity } from "../models/user-identity";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BACK_END_URL;

export const userLoginApi = async (
  userLogin: UserLoginDto
): Promise<UserIdentity> => {
  const userLoginApiUrl = apiUrl + "/account/login";
  const response = await axios.post<UserIdentity>(userLoginApiUrl, userLogin);
  return response.data;
};
