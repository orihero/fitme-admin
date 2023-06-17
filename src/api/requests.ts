import axios from "axios";
import { Category, Exercise, Trainer, User } from "../types";

const REMOTE_URL = "https://fitme-api-yng7n.ondigitalocean.app/api";
const LOCAL_URL = "http://localhost:5001/api"

const axiosInstance = axios.create({
  baseURL: LOCAL_URL,
  url: LOCAL_URL,
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
  user: {
    add: (data: Partial<User>) => axiosInstance.post("/users", data),
    get: (params?: any) => axiosInstance.get("/users", { params }),
    delete: (id: string) => axiosInstance.delete(`/users/${id}`),
  },
  trainers: {
    add: (data: Partial<Trainer>) => axiosInstance.post("/trainers", data),
    get: (params?: any) => axiosInstance.get("/trainers", { params }),
    delete: (id: string) => axiosInstance.delete(`/trainers/${id}`),
    edit: (data: Partial<Trainer>) => axiosInstance.put(`/trainers/${data._id}`, data)
  }
};
