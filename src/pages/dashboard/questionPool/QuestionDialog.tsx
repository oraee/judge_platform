import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
type Question = {
  title: string;
  description: string;
  id: number;
};

type Props = {
  question?: Question;
  open?: boolean;
  onClose?: () => void;
};

const QuestionDialog = ({ question, open, onClose }: Props) => {
  const isEdit = !!question;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!question) {
      setTitle("");
      setDescription("");
      return;
    }
    setTitle(question.title);
    setDescription(question.description);
  }, [open]);

  return (
    <Dialog open={!!open}>
      <DialogTitle>{isEdit ? "Edit Question" : "Create Question"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="description"
          type="text"
          multiline
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} variant="contained">
          {isEdit ? "Edit" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionDialog;
