import { ROLES, User } from "../types";

export const date = {
  createdAt: "2023-04-15T13:42:11",
  updatedAt: "2023-04-16T13:42:11",
};

export const users: User[] = [
  {
    ...date,
    _id: "USER1",
    name: "Name1",
    phoneNumber: "+998999999999",
    isProAccount: true,
    role: ROLES.SUPERADMIN,
  },
  {
    ...date,
    _id: "USER2",
    name: "Name2",
    phoneNumber: "+998999999999",
    isProAccount: false,
    role: ROLES.USER,
  },
  {
    ...date,
    _id: "USER3",
    name: "Name3",
    phoneNumber: "+998999999999",
    isProAccount: false,
    role: ROLES.USER,
  },
  {
    ...date,
    _id: "USER4",
    name: "Name4",
    phoneNumber: "+998999999999",
    isProAccount: false,
    role: ROLES.USER,
  },
  {
    ...date,
    _id: "USER5",
    name: "Name5",
    phoneNumber: "+998999999999",
    isProAccount: false,
    role: ROLES.USER,
  },
];
