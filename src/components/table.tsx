import { Button, IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

type Question = {
  title: string;
  description: string;
  id: number;
};

type Props = {
  isQuestionTable: boolean;
  questionsList: Question[];
  onEdit?: (id: number) => void;
};

export const CustomTable = ({
  isQuestionTable,
  questionsList,
  onEdit,
}: Props) => {
  const [selectionsList, setSelectionsList] = useState<number[]>([]);
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
            <IconButton onClick={() => onEdit && onEdit(params.row.id)}>
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
    <>
      <DataGrid
        rows={questionsList || []}
        checkboxSelection={!isQuestionTable}
        onRowSelectionModelChange={(list) =>
          setSelectionsList(list as number[])
        }
        columns={isQuestionTable ? editableQuestion : selectableQuestion}
      />
      {!!selectionsList.length && !isQuestionTable && (
        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={() => {
            console.log(selectionsList);
          }}
        >
          add
        </Button>
      )}
    </>
  );
};
