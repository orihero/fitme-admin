import { useState } from "react";

export const UsersEditHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
