import { useQuery } from "@tanstack/react-query";
import Layout from "../layout";
import { getQuestionsListRequest } from "../api";
import { CustomTable } from "../../../components/table";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import QuestionDialog from "./QuestionDialog";

type Question = {
  title: string;
  description: string;
  id: number;
};
const QuestionPool = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(
    undefined
  );
  const { data } = useQuery(["questionsList"], getQuestionsListRequest);

  const handleOpenEditDialog = (id: number) => {
    setCurrentQuestion(data?.find((u) => u.id === id) || undefined);
    setOpenEditDialog(true);
  };
  const handleOpenAddQuestionDialog = () => {
    setCurrentQuestion(undefined);
    setOpenEditDialog(true);
  };
  return (
    <Layout title="Question Pool">
      <Stack spacing={4}>
        <Box textAlign="right">
          <Button variant="contained" onClick={handleOpenAddQuestionDialog}>
            Add +
          </Button>
        </Box>

        <Box>
          {data ? (
            <CustomTable
              onEdit={handleOpenEditDialog}
              questionsList={data}
              isQuestionTable={true}
            />
          ) : (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          )}
        </Box>
      </Stack>
      <QuestionDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        question={currentQuestion}
      />
    </Layout>
  );
};

export default QuestionPool;
