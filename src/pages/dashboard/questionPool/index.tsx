import { useQuery } from "@tanstack/react-query";
import Layout from "../layout";
import { getQuestionsListRequest } from "../api";
import { CustomTable } from "../../../components/table";
import { CircularProgress, Stack } from "@mui/material";

const QuestionPool = () => {
  const { data } = useQuery(["questionsList"], getQuestionsListRequest);
  return (
    <Layout title="Question Pool">
      {data ? (
        <CustomTable questionsList={data} isQuestionTable={true} />
      ) : (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </Layout>
  );
};

export default QuestionPool;
