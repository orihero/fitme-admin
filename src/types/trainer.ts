import { BaseUser, GENDER } from ".";

export type Trainer = BaseUser & {
  gender: GENDER;
  age: number;
  email: string;
  city: string;
  avatar: string;
  speciality: string;
  experience: number;
  education: string;
  aboutMe: string;
  telegramLink: string;
  instagramLink: string;
  //   disciples: User[];
  //   requestedDisciples: User[];
  //   workoutPlans: WorkoutPlan[];
};
