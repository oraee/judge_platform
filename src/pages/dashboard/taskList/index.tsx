import React, { useState } from "react";

import { Box, CircularProgress, IconButton, Stack } from "@mui/material";

import TaskTable from "./taskTable";
import { useQuery } from "@tanstack/react-query";
import { Task, getTasks } from "./api";
import Layout from "../layout";
import AssignTask from "./assignTask";

const TaskList = () => {
  const { data } = useQuery(["tasks"], getTasks);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <Layout title="Task List">
      {data ? (
        <TaskTable
          tasks={data}
          onAssign={(id) => {
            setSelectedTask(data.find((t) => t.id === id) || null);
            setOpenDialog(true);
          }}
        />
      ) : (
        <CircularProgress />
      )}

      <AssignTask
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        task={selectedTask}
      />
    </Layout>
  );
};

export default TaskList;
