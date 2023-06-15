import { BaseData, MultiLanguageName, Category, Trainer, User } from ".";

export type Product = BaseData & {
  name: MultiLanguageName;
  calories: number;
  protein: number;
  oil: number;
  carb: number;
  category: Category;
  creatorTrainer?: Trainer;
  creatorUser?: User;
};
