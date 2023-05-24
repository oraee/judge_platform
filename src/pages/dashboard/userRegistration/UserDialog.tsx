import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

import { User } from "./api";
import { useEffect, useState } from "react";

type Props = {
  user?: User | null;
  open?: boolean;
  onClose?: () => void;
};

const UserDialog = ({ user, open, onClose }: Props) => {
  const isEdit = !!user;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!user) return;
    setUsername(user.username);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [open]);

  return (
    <Dialog open={!!open}>
      <DialogTitle>{isEdit ? "Edit User" : "Create User"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            display: isEdit ? "none" : "block",
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="First Name"
          type="email"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Last Name"
          type="email"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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

export default UserDialog;
