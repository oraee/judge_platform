import { Box, Button, Stack } from "@mui/material";
import Layout from "../layout";

const UserManagement = () => {
  return (
    <Layout title="User Management">
      <Stack>
        <Box textAlign="right">
          <Button variant="contained">Add User +</Button>
        </Box>

        <Box></Box>
      </Stack>
    </Layout>
  );
};

export default UserManagement;
