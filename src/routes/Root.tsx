import { BrowserRouter, useRoutes } from "react-router-dom";

import { ROUTES } from "./ROUTES";

import HomePage from "../screens/Home";
import LoginPage from "../screens/Login";

import Dashboard from "../screens/Dashboard";
import Main from "../screens/Main";
import UsersPage, {
  AddUser as AddUserPage,
  EditUser as EditUserPage,
  ReadUser as ReadUserPage,
} from "../screens/Users";
import TrainersPage, {
  AddTrainer as AddTrainerPage,
  EditTrainer as EditTrainerPage,
  ReadTrainer as ReadTrainerPage,
} from "../screens/Trainers";
import CategoriesPage from "../screens/Categories";
import ExercisesPage from "../screens/Exercises";
import WorkoutPlansPage from "../screens/WorkoutPlans";
import ProductsPage from "../screens/Products";
import DishesPage from "../screens/Dishes";
import NutritionPlansPage from "../screens/NutritionPlans";
import AddExerciseView from "../screens/Exercises/add/view";
import CategoryAddView from "../screens/Categories/add/view";

const Routess = () => {
  const routes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.LOGIN,
      element: <LoginPage />,
    },

    {
      path: ROUTES.DASHBOARD,
      element: <Dashboard />,
      children: [
        {
          path: ROUTES.MAIN,
          element: <Main />,
        },
        {
          path: ROUTES.USERS,
          element: <UsersPage />,
          children: [
            {
              path: ROUTES.ADD_USER,
              element: <AddUserPage />,
            },
            {
              path: ROUTES.EDIT_USER,
              element: <EditUserPage />,
            },
            {
              path: ROUTES.READ_USER,
              element: <ReadUserPage />,
            },
          ],
        },
        {
          path: ROUTES.TRAINERS,
          element: <TrainersPage />,
          children: [
            {
              path: ROUTES.ADD_TRAINER,
              element: <AddTrainerPage />,
            },
            {
              path: ROUTES.EDIT_TRAINER,
              element: <EditTrainerPage />,
            },
            {
              path: ROUTES.READ_TRAINER,
              element: <ReadTrainerPage />,
            },
          ],
        },
        {
          path: ROUTES.CATEGORIES,
          element: <CategoriesPage />,
          children: [
            {
              path: ROUTES.ADD_CATEGORY,
              element: <CategoryAddView />,
            },
          ],
        },
        {
          path: ROUTES.EXERCISES,
          element: <ExercisesPage />,
          children: [
            { path: ROUTES.ADD_EXERCISE, element: <AddExerciseView /> },
          ],
        },
        {
          path: ROUTES.WORKOUT_PLANS,
          element: <WorkoutPlansPage />,
        },
        {
          path: ROUTES.PRODUCTS,
          element: <ProductsPage />,
        },
        {
          path: ROUTES.DISHES,
          element: <DishesPage />,
        },
        {
          path: ROUTES.NUTRITION_PLANS,
          element: <NutritionPlansPage />,
        },
      ],
    },
  ]);

  return routes;
};

const Root = () => {
  return (
    <BrowserRouter>
      <Routess />
    </BrowserRouter>
  );
};

export default Root;
