import { fakeApi } from "../../helpers/fakeApi";

export const getQuestionsListRequest = async () => {
  await fakeApi();

  return [{ title: 'quesion 1',
        description: 'this is first quesion',
        id: 1
    },
      {
        title: 'quesion 2',
        description: 'this is second quesion',
        id: 2
      }]
};
