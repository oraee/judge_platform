import { useQuery } from "@tanstack/react-query";
import Layout from "../layout";
import { getQuestionsListRequest } from "../api";
import { CustomTable } from "../../../components/table";
import { CircularProgress, Stack } from "@mui/material";

const TaskCreation = () => {
  const { data } = useQuery(["questionsList"], getQuestionsListRequest);

  return (
    <Layout title="Task Creation">
      {data ? (
        <CustomTable questionsList={data} isQuestionTable={false} />
      ) : (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </Layout>
  );
};

export default TaskCreation;
