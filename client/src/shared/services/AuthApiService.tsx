import { UserLoginDto } from "@/shared/models/user-login.interface";
import { UserIdentity } from "../models/user-identity";
import axios from "axios";
import { ProblemDetails } from "../models/problem-details.interface";

const apiUrl = import.meta.env.VITE_BACK_END_URL;

export interface HttpResponse<TResponse, TError> {
  response: TResponse;
  error: TError;
}

export const userLoginApi = async (
  userLogin: UserLoginDto
): Promise<HttpResponse<UserIdentity | null, ProblemDetails | unknown>> => {
  const userLoginApiUrl = apiUrl + "account/login";
  const httpResponse = {} as HttpResponse<
    UserIdentity,
    ProblemDetails | unknown
  >;
  try {
    const response = await axios.post<UserIdentity>(userLoginApiUrl, userLogin);
    httpResponse.response = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      httpResponse.error = (errorData as ProblemDetails) ?? errorData;
    } else {
      httpResponse.error = error;
    }
  }

  return httpResponse;
};
