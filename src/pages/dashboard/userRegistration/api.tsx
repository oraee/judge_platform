import { fakeApi } from "../../../helpers/fakeApi";

export type User = {
  username: string;
  role: string;
  firstName: string;
  lastName: string;
};

const getUsers = async () => {
  await fakeApi();

  return [
    {
      username: "maryam",
      role: "admin",
      firstName: "maryam",
      lastName: "oraee",
    },
    {
      username: "ahmad",
      role: "admin",
      firstName: "ahmad",
      lastName: "soori",
    },
    {
      username: "zeinab",
      role: "admin",
      firstName: "zeinab",
      lastName: "montazeri",
    },
  ] as User[];
};
