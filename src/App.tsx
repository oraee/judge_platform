import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Task from "./pages/task";
import Login from "./pages/login";
import QuestionPool from "./pages/dashboard/questionPool";
import TaskCreation from "./pages/dashboard/taskCreation";
import UserManagement from "./pages/dashboard/userRegistration";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />

      <Routes>
        <Route path="login/" element={<Login />} />
        <Route path="task/" element={<Task />} />
        <Route path="question-pool/" element={<QuestionPool />} />
        <Route path="task-creation/" element={<TaskCreation />} />
        <Route path="user-management/" element={<UserManagement />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
