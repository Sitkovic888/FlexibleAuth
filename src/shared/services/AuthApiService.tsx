import { UserLoginDto } from "@/shared/models/user-login.interface";
import { UserIdentity } from "../models/user-identity";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ProblemDetails } from "../models/problem-details-interface";

const apiUrl = import.meta.env.VITE_BACK_END_URL;

const unknownError: ProblemDetails = {
  status: "500",
  type: "Internal server error",
  details: "Internal server error",
};

export const userLoginApi = async (
  userLogin: UserLoginDto
): Promise<AxiosResponse<UserIdentity, ProblemDetails>> => {
  const userLoginApiUrl = apiUrl + "account/login";
  try {
    const response = await axios.post<UserIdentity>(userLoginApiUrl, userLogin);
    return response;
  } catch (error) {
    if (error as ProblemDetails) {
      return Promise.reject(error);
    } else if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      toast.error(errorData || error.message);
    } else {
      toast.error((error as Error).message);
    }
  }

  return Promise.reject(unknownError);
};
