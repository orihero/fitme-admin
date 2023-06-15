import { NUTRITION_TYPE, Product, Dish } from ".";

export type SchemaNutrition = {
  date: Date;
  data: SchemaNutritionData;
  products: Product[];
  amountsP: number[];
  dishes: Dish[];
  amountsD: number[];
};

export type SchemaNutritionData = {
  nType: NUTRITION_TYPE;
  dailyNorm: number;
  amount: number;
  proteinPercent: number;
  oilPercent: number;
  mergeAmount: number;
  mergeCarb: number;
};
