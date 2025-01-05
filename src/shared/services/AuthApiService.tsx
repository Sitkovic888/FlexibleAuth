import axios from "axios";
import { UserLoginDto } from "@/shared/models/user-login.interface";

const apiUrl = import.meta.env.VITE_BACK_END_URL;

export const loginApi = async (userLogin: UserLoginDto) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await axios.post<UserLoginDto>(
      apiUrl + "/account/login",
      userLogin
    );

    return data;
  } catch (e) {
    // handleError(e);
    throw e;
  }
};
