import axios from "axios";
import { UserLoginData } from "../Models/UserLoginData";

const apiUrl = import.meta.env.VITE_BACK_END_URL;

export const loginApi = async (username: string, password: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userLogin = new UserLoginData();
    userLogin.username = username;
    userLogin.password = password;
    const data = await axios.post<UserLoginData>(
      apiUrl + "/account/login",
      userLogin
    );

    return data;
  } catch (e) {
    // handleError(e);
    throw e;
  }
};
