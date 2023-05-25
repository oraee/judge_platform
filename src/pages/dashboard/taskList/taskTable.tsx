import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, IconButton, Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "./api";

type Props = {
  tasks: Task[];
  onAssign: (id: number) => void;
};

const TaskTable = ({ tasks, onAssign }: Props) => {
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title" },
    {
      field: "questionsNumber",
      headerName: "questions Count",
      renderCell: (params: GridRenderCellParams) => {
        return params.row.questions.length;
      },
    },
    {
      field: "assigneesNumber",
      headerName: "Assignees Number",
      renderCell: (params: GridRenderCellParams) => {
        return params.row.assignedTo.length;
      },
    },
    {
      field: "actions",
      headerName: "",

      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction="row">
            <IconButton onClick={() => onAssign(params.row.id)}>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box>
      <DataGrid rows={tasks} columns={columns} />
    </Box>
  );
};

export default TaskTable;
