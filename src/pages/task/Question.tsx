import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TasksQuestions } from "./api";

type Props = {
  data: TasksQuestions;
};

export const Question = ({ data }: Props) => {
  return (
    <Box m={4}>
      <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
        <Typography sx={{ ml: 2 }} variant="h4" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={{ ml: 4 }} variant="h6" gutterBottom>
          {data.description}
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="end">
        <Select sx={{ margin: "10px" }} label="Language" value={0}>
          <MenuItem value={0}>python</MenuItem>
          <MenuItem value={1}>react js</MenuItem>
          <MenuItem value={2}>java</MenuItem>
        </Select>
      </Stack>
      <TextField fullWidth multiline label="Inter your code..." minRows={10} />
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
