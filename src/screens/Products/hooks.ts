import { useState } from "react";

export const ProductsHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
