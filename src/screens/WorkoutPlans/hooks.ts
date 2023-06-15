import { useState } from "react";

export const WorkoutPlansHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
