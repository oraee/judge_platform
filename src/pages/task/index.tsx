import { Button } from "@mui/material";
import Sidebar from "./sidebar";
import { useQuery } from "@tanstack/react-query";
import { TasksQuestions, getTasksQuestions } from "./api";
import { useState } from "react";
import { Question } from "./Question";

const Task = () => {
  const [selectedQuestion, setSelectedQuestion] =
    useState<TasksQuestions | null>(null);

  const { data: task } = useQuery(["taskQuestions"], () =>
    getTasksQuestions(1)
  );

  return (
    <div>
      <Sidebar
        questions={task?.questions}
        selectedId={selectedQuestion?.id}
        taskTitle={task?.title}
        onSelect={(id) =>
          setSelectedQuestion(task?.questions.find((q) => q.id === id) || null)
        }
      >
        {selectedQuestion && <Question data={selectedQuestion} />}
      </Sidebar>
    </div>
  );
};

export default Task;
