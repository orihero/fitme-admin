import { useState } from "react";
import { ROUTES } from "../../routes/ROUTES";
import { useLocation } from "react-router-dom";

export const ExercisesHooks = () => {
  const { pathname } = useLocation();
  let show = true;
  const addExerciseRoute = `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.ADD_EXERCISE}`;
  // const editUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.EDIT_USER}`;
  // const readUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.READ_USER}`;
  const condition =
    pathname === addExerciseRoute || pathname === `${addExerciseRoute}/`;
  // pathname === editUserRoute ||
  // pathname === `${editUserRoute}/` ||
  // pathname === readUserRoute ||
  // pathname === `${readUserRoute}/`;

  if (condition) {
    show = false;
  }
  return { show };
};
