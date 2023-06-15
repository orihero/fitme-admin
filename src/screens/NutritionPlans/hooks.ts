import { useState } from "react";

export const NutritionPlansHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
