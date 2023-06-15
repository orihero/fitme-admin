import { useState } from "react";

export const TrainersEditHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
