import { useState } from "react";
import { User } from "../../../types";
import { ROLES } from "./../../../types/index";

export const UsersAddHooks = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Partial<User>>({});

  const onSetUser = (
    key: "name" | "phoneNumber" | "role" | "isProAccount",
    value: any
  ) => {
    let obj = { ...user };
    obj[key] = value;
    setUser(obj);
  };

  const onSubmit = () => {
    try {
      setLoading(true);

      setTimeout(() => {
        console.log("user: ", user);
        setLoading(false);
      }, 3000);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  return { loading, user, onSetUser, onSubmit, ROLES };
};
