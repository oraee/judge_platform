import { IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Question = {
  title: string;
  description: string;
  id: number;
};

type Props = {
  isQuestionTable: boolean;
  questionsList: Question[];
};

export const CustomTable = ({ isQuestionTable, questionsList }: Props) => {
  const handleEdit = (id: number) => {};
  const handleDelete = (id: number) => {};
  const selectableQuestion: GridColDef[] = [
    { field: "id", headerName: "id" },
    { field: "title", headerName: "title" },
    { field: "description", headerName: "description" },
  ];

  const editableQuestion: GridColDef[] = [
    { field: "id", headerName: "id" },
    { field: "title", headerName: "title" },
    { field: "description", headerName: "description" },

    {
      field: "actions",
      headerName: "",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction="row">
            <IconButton onClick={() => handleEdit(params.row.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={questionsList || []}
      checkboxSelection={!isQuestionTable}
      columns={isQuestionTable ? editableQuestion : selectableQuestion}
    />
  );
};
