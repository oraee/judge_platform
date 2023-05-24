import React from "react";
import { User } from "./api";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, IconButton, Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserTable = ({ users, onEdit, onDelete }: Props) => {
  const columns: GridColDef[] = [
    { field: "username", headerName: "Username" },
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "role", headerName: "Role" },
    {
      field: "actions",
      headerName: "",

      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction="row">
            <IconButton onClick={() => onEdit(params.row.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box>
      <DataGrid rows={users} columns={columns} />
    </Box>
  );
};

export default UserTable;
