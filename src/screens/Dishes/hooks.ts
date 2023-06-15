import { useState } from "react";

export const DishesHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
