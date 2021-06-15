import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, UseAuth } from "../types";
import { initialUser } from "../constants";

const useAuth = (): UseAuth => {
  const [user, setUser] = useState<User>(initialUser);

  const getUser = () => AsyncStorage.getItem("user");

  const onLogin = () => setUser({ loginToken: "12345" });

  const onLogout = () => setUser(initialUser);

  useEffect(() => {
    const checkInitialAuth = async () => {
      const u = await getUser();
      if (u) setUser(JSON.parse(u));
    };
    checkInitialAuth();
  }, []);

  return { user, onLogin, onLogout };
};

export default useAuth;
