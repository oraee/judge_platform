import { Box, Button, CircularProgress, Stack } from "@mui/material";
import Layout from "../layout";
import UserTable from "./userTable";
import { useQuery } from "@tanstack/react-query";
import { User, getUsers } from "./api";
import UserDialog from "./UserDialog";
import { useState } from "react";

const UserManagement = () => {
  const { data: users } = useQuery(["users"], getUsers);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleOpenEditDialog = (id: number) => {
    setCurrentUser(users?.find((u) => u.id === id) || null);
    setOpenEditDialog(true);
  };

  const handleOpenAddUserDialog = () => {
    setCurrentUser(null);
    setOpenEditDialog(true);
  };

  return (
    <Layout title="User Management">
      <Stack spacing={4}>
        <Box textAlign="right">
          <Button variant="contained" onClick={handleOpenAddUserDialog}>
            Add User +
          </Button>
        </Box>

        <Box>
          {users ? (
            <UserTable
              users={users || []}
              onEdit={handleOpenEditDialog}
              onDelete={(id) => console.log(id)}
            />
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Stack>

      <UserDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        user={currentUser}
      />
    </Layout>
  );
};

export default UserManagement;
