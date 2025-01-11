import React, {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { userLoginApi } from "@/shared/services/authApiService";
import { toast } from "react-toastify";
import axios from "axios";
import { UserLoginDto } from "@/shared/models/user-login.interface";
import { UserIdentity } from "@/shared/models/user-identity";

type UserIdentityContextType = {
  user: UserIdentity | null;
  registerUser: (loginUser: UserLoginDto) => Promise<void>;
  loginUser: (loginUserData: UserLoginDto) => Promise<void>;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

const userContext = createContext<UserIdentityContextType>(
  {} as UserIdentityContextType
);

type Props = { children: ReactNode };

export const UserProvider = ({ children }: Props): ReactElement => {
  const navigate = useNavigate();
  const [, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserIdentity | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    setIsReady(true);
  }, []);

  const registerUser = async (userRegistration: UserLoginDto) => {
    // await registerApi(email, userName, password)
    //   .then((res) => {
    //     const resData = res?.data;
    //     if (resData) {
    //       localStorage.setItem("token", resData.token);
    //       const userObj = {
    //         email: resData.email,
    //         userName: resData.userName,
    //       };
    //       localStorage.setItem("user", JSON.stringify(userObj));
    //       setToken(resData.token);
    //       setUser(userObj);
    //       toast.success("Succesfull login.");
    //       navigate("/search");
    //     }
    //   })
    //   .catch((e) => toast.warning("A server error occured."));
  };

  const loginUser = async (userLogin: UserLoginDto): Promise<void> => {
    console.log("loginUser", userLogin);
    await userLoginApi(userLogin)
      .then((res) => {
        const resData = res.data;
        if (resData) {
          localStorage.setItem("token", resData.token);

          const userObj: UserIdentity = {
            email: resData.email,
            userName: resData.userName,
            token: resData.token,
          };

          setToken(userObj.token);
          setUser(userObj);

          toast.success("Succesfull Login.");
          navigate("/home");
        }
      })
      .catch((e) => toast.warning("A server error occured.", e.message));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <userContext.Provider
      value={{ user, registerUser, loginUser, logoutUser, isLoggedIn }}
    >
      {isReady ? children : null}
    </userContext.Provider>
  );
};

export const useAuth = (): UserIdentityContextType =>
  React.useContext(userContext);
