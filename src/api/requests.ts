import axios from "axios";
import { Category, Exercise } from "../types";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  url: "http://localhost:5000/api",
});

export const REQUESTS = {
  exercise: {
    addExercise: (data: Partial<Exercise>) =>
      axiosInstance.post("/exercises", data),
  },
  category: {
    add: (data: Partial<Category>) => axiosInstance.post("/categories", data),
    get: (params?: any) => axiosInstance.get("/categories", { params }),
  },
};
