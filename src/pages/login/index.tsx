import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const onSubmit = () => {
    login(username, password);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Stack justifyContent="center" alignItems="center" height="100vh">
        <Stack
          spacing={2}
          width="100%"
          maxWidth="360px"
          p={2}
          alignItems="center"
        >
          <Typography variant={"h4"} sx={{ mb: 4 }}>
            Judge Platform
          </Typography>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" fullWidth type="submit">
            Login
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Login;
