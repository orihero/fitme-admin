import { BaseData, Category } from ".";

export type Exercise = BaseData & {
  title: string;
  video: string;
  image: string;
  description: string;
  metadescription: string;
  parentCategory: Category | null;
  category: Category | null;
};
