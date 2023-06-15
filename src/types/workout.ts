import { BaseData, GENDER, LEVEL } from ".";
import { Exercise } from "./exercise";
import { Trainer } from "./trainer";
import { User } from "./user";

export type WorkoutPlan = BaseData & {
  title: string;
  description: string;
  price: number;
  gender: GENDER;
  level: LEVEL;
  week: number;
  creator: User | Trainer;
  workouts: Workout[][];
};

export type Workout = {
  exercise: Exercise;
  approach: number;
  repetitions: string;
};
