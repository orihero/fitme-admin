import { useState } from "react";

export const TrainersAddHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
