import {
  Box,
  Button,
  Chip,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TasksQuestions } from "./api";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { language } from "../../helpers/Language";
import { useState } from "react";
type Props = {
  data: TasksQuestions;
};

export const Question = ({ data }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python (3.8.1)");
  return (
    <Box m={4}>
      <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
        <Stack direction="row" justifyContent="space-between" sx={{ mx: 2 }}>
          <Typography variant="h4" gutterBottom>
            {data.title}
          </Typography>
          <Chip
            sx={{
              width: "60px",
              fontWeight: "bold",
            }}
            label={data.grade}
            color={
              data.grade === 100
                ? "success"
                : data.grade === 0
                ? "error"
                : "warning"
            }
          />
        </Stack>
        <Typography sx={{ ml: 4 }} variant="h6" gutterBottom>
          {data.description}
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="end">
        <Select
          sx={{ margin: "10px" }}
          label="Language"
          defaultValue={71}
          onChange={(e) => {
            console.log(
              language.find((l) => l.id === e.target.value)?.editorName || ""
            );

            setSelectedLanguage(
              language.find((l) => l.id === e.target.value)?.editorName || ""
            );
          }}
        >
          {language.map((l) => (
            <MenuItem value={l.id}>{l.name}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Editor
        height="50vh"
        defaultValue="// some comment"
        language={selectedLanguage}
        theme="vs-dark"
      />
      <Stack direction="row" justifyContent="space-between">
        <Button sx={{ m: "10px" }} variant="contained">
          submit
        </Button>
        <Button sx={{ m: "10px" }} variant="outlined" color="secondary">
          upload file
        </Button>
      </Stack>
    </Box>
  );
};
