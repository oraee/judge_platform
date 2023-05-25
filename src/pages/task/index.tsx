import Sidebar from "./sidebar";
import { useQuery } from "@tanstack/react-query";
import { TasksQuestions, getTasksQuestions } from "./api";
import { useState } from "react";
import { Question } from "./Question";
import EndTime from "./EndTime";

const Task = () => {
  const [selectedQuestion, setSelectedQuestion] =
    useState<TasksQuestions | null>(null);

  const [endTime, setEndTime] = useState(false);

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
        timer={!task ? 0 : task?.time}
        onTimeOut={() => setEndTime(true)}
      >
        {endTime ? (
          <EndTime />
        ) : (
          selectedQuestion && <Question data={selectedQuestion} />
        )}
      </Sidebar>
    </div>
  );
};

export default Task;
