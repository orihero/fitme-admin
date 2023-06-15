import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/ROUTES";

export const TrainersHooks = () => {
  const { pathname } = useLocation();

  const [state, setState] = useState("");

  let show = true;
  const addTrainerRoute = `${ROUTES.DASHBOARD}/${ROUTES.TRAINERS}/${ROUTES.ADD_TRAINER}`;
  const editTrainerRoute = `${ROUTES.DASHBOARD}/${ROUTES.TRAINERS}/${ROUTES.EDIT_TRAINER}`;
  const readTrainerRoute = `${ROUTES.DASHBOARD}/${ROUTES.TRAINERS}/${ROUTES.READ_TRAINER}`;
  const condition =
    pathname === addTrainerRoute ||
    pathname === `${addTrainerRoute}/` ||
    pathname === editTrainerRoute ||
    pathname === `${editTrainerRoute}/` ||
    pathname === readTrainerRoute ||
    pathname === `${readTrainerRoute}/`;

  if (condition) {
    show = false;
  }

  return { state, setState, show };
};
