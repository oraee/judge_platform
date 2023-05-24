import { fakeApi } from "../../helpers/fakeApi";

export const login = async (props: { username: string; password: string }) => {
  await fakeApi();

  return {
    username: "alireza",
    role: "superuser",
    firstName: "alireza",
    lastName: "zandi",
    token: "dsa",
  };
};
