import { fakeApi } from "../../../helpers/fakeApi";

export type User = {
  id: number;
  username: string;
  role: string;
  firstName: string;
  lastName: string;
};

export const getUsers = async () => {
  await fakeApi();

  return [
    {
      username: "maryam",
      role: "admin",
      firstName: "maryam",
      lastName: "oraee",
      id: 1,
    },
    {
      username: "ahmad",
      role: "admin",
      firstName: "ahmad",
      lastName: "soori",
      id: 2,
    },
    {
      username: "zeinab",
      role: "admin",
      firstName: "zeinab",
      lastName: "montazeri",
      id: 3,
    },
  ] as User[];
};
