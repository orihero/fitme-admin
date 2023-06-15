import { useState } from "react";

export const TrainersReadHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
