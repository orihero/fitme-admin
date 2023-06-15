import { BaseData, Product, Category, Trainer, User } from ".";

export type Dish = BaseData & {
  name: string;
  products: Product[];
  amounts: number[];
  category: Category;
  creatorTrainer?: Trainer;
  creatorUser?: User;
};
