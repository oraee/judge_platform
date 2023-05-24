export type TasksQuestions = {
  title: string;
  description: string;
  id: number;
  grade: number | null;
  solved: false;
};

export const getTasksQuestions = async (task: number) => {
  await fakeApi();

  return {
    questions: [
      {
        title: "question 1",
        description: "solve it!",
        grade: null,
        id: 1,
        solved: false,
      },
      {
        title: "question 2",
        description: "solve it!",
        grade: null,
        id: 2,
        solved: false,
      },
      {
        title: "question 3",
        description: "solve it!",
        grade: null,
        id: 3,
        solved: false,
      },
    ] as TasksQuestions[],
    time: 456564654564,
  };
};

export const submitQuestion = async (
  questionId: number,
  submittedText: string,
  lang: string
) => {
  await fakeApi();

  return {
    grade: 100,
    solved: true,
  };
};
