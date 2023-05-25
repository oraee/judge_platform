import { useQuery } from "@tanstack/react-query";
import Layout from "../layout";
import { getQuestionsListRequest } from "../api";
import { CustomTable } from "../../../components/table";
import { Box, CircularProgress, Stack, TextField } from "@mui/material";

const TaskCreation = () => {
  const { data } = useQuery(["questionsList"], getQuestionsListRequest);

  return (
    <Layout title="Task Creation">
      <Stack spacing={4}>
        <Box>
          <TextField label="title" type="string" />
        </Box>
        <Box>
          <TextField sx={{ mr: 10 }} label="hours" type="number" />
          <TextField label="minutes" type="number" />
        </Box>
        <Box>
          {data ? (
            <CustomTable questionsList={data} isQuestionTable={false} />
          ) : (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          )}
        </Box>
      </Stack>
    </Layout>
  );
};

export default TaskCreation;
