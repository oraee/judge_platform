import { fakeApi } from "../../../helpers/fakeApi";

export type TasksQuestions = {
  title: string;
  description: string;
  id: number;
};

export type Task = {
  title: string;
  questions: TasksQuestions[];
  assignedTo: string[];
  expireTime: string;
  id: number;
};

export const getTasks = async () => {
  await fakeApi();

  return [
    {
      questions: [
        {
          title: "question 1",
          description: "solve it!",

          id: 1,
        },
        {
          title: "question 2",
          description: "solve it!",

          id: 2,
        },
        {
          title: "question 3",
          description: "solve it!",

          id: 3,
        },
      ],
      assignedTo: [],
      expireTime: "6544",
      title: "Task 1",
      id: 1,
    },
    {
      questions: [
        {
          title: "question 1",
          description: "solve it!",

          id: 1,
        },
        {
          title: "question 2",
          description: "solve it!",

          id: 2,
        },
        {
          title: "question 3",
          description: "solve it!",

          id: 3,
        },
      ],
      assignedTo: [],
      expireTime: "sda",
      title: "Task 2",
      id: 2,
    },
  ] as Task[];
};
