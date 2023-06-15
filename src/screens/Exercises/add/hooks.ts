import { useEffect, useState } from "react";
import { Category, CategoryType, Exercise } from "../../../types";
import { REQUESTS } from "../../../api/requests";
import { Snackbar } from "@mui/material";

const ExerciseAddHook = () => {
  const [exercise, setExercise] = useState<Partial<Exercise>>({});
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const onChangeState = (el: { target: { name: string; value: string } }) => {
    setExercise({ ...exercise, [el.target.name]: el.target.value });
  };

  const fetchCategories = async () => {
    try {
      const res = await REQUESTS.category.get({ type: CategoryType.EXERCISE });
      setCategories(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = async () => {
    console.log("====================================");
    console.log("DSA");
    console.log("====================================");
    setLoading(true);
    try {
      const res = await REQUESTS.exercise.addExercise(exercise);
    } catch (error) {
      //@ts-ignore
      setErrorMessage(error?.response?.data?.message);
    }
    setLoading(false);
  };

  return {
    exercise,
    onChangeState,
    loading,
    onSubmit,
    errorMessage,
    categories,
  };
};

export default ExerciseAddHook;
