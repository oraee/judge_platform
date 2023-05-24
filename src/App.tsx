import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Task from "./pages/task";
import Login from "./pages/login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />

      <Routes>
        <Route path="login/" element={<Login />} />
        <Route path="task/" element={<Task />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
