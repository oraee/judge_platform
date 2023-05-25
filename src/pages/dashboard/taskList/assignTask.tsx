import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

import { Task } from "./api";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  task: Task | null;
  onClose: () => void;
};

const AssignTask = ({ open, task, onClose }: Props) => {
  const [email, setEmail] = useState("");
  return (
    <Dialog open={!!open}>
      <DialogTitle>Assign Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email"
          type="text"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} variant="contained">
          Assign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTask;
