import { BaseData, NUTRITION_TYPE, Product, Dish } from ".";

export type NutritionPlan = BaseData & {
  creatorName: string;
  title: string;
  description: string;
  calories: number;
  proteinPercent: number;
  oilPercent: number;
  type: NUTRITION_TYPE;
  nutritions: Reception[][];
};

export type Reception = {
  products: Product[];
  amountsP: number[];
  dishes: Dish[];
  amountsD: number[];
  recommendation: string;
};
