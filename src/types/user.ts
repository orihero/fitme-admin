import { BaseUser } from ".";

export type User = BaseUser & {
  isProAccount: boolean;
};
