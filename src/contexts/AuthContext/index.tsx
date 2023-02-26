import {useRouter} from "next/router";
import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "../../services/api-axios";

type AuthContextData = {
  logged: boolean;
  session: any;
  // handleUserLogin: () => void;
  userData: Object;
  loading: boolean;
  logOut: () => void;
};

export type UserData = {
  username: string;
  created_at: string;
};

const AuthContext = createContext({} as AuthContextData);

export type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({children}: AuthProviderProps) {
  const [userData, setUserData] = useState({} as UserData);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [session, setSession] = useState(null);

  const {push} = useRouter();

  useEffect(() => {
    (async function () {
      const token = await localStorage.getItem("token");
      if (token) {
        await api
          .get("/students")
          .then(({data}) => {
            setUserData(data);
            setLogged(true);
          })
          .catch(({response}) => {
            localStorage.removeItem("token");
            setLogged(false);
            //alert()
          });
      }
      setLoading(false);
    })();
  }, []);

  const logOut = () => {
    window.localStorage.setItem("token", "");
    push("/");
  };

  return (
    <AuthContext.Provider value={{logged, session, userData, loading, logOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider, AuthContext};
