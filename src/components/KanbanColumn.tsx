import React from "react";
import { Plus } from "lucide-react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  progressColor: string;
  date: string;
  comments?: number;
  likes?: number;
  members?: string[];
  maxProgress: number;
}

interface TaskColumns {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

interface KanbanColumnProps {
  title: string;
  count: number;
  tasks: Task[];
  // addNewTask: () => void;
  // columnId: string;
  columnId: keyof TaskColumns;
  addNewTask: (columnId: keyof TaskColumns) => void;
  onEdit: (
    id: string,
    updatedTask: { title: string; subtitle: string }
  ) => void;
  onDelete: (id: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  count,
  tasks,
  addNewTask,
  columnId,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex-1 min-w-80">
      <div className="border-2 border-dotted border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="font-medium text-gray-700 dark:text-gray-300">
              {title}
            </h2>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-sm">
              ({count})
            </span>
          </div>
          <button
            // onClick={addNewTask}
            onClick={() => addNewTask(columnId)}
            className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add new task</span>
          </button>
        </div>

        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`space-y-4 min-h-32 p-2 rounded-lg transition-colors ${
                snapshot.isDraggingOver ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
            >
              {tasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  subtitle={task.subtitle}
                  progress={task.progress}
                  progressColor={task.progressColor}
                  date={task.date}
                  comments={task.comments}
                  likes={task.likes}
                  members={task.members}
                  maxProgress={task.maxProgress}
                  index={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
              {provided.placeholder}

              {title === "Done" && tasks.length === 0 && (
                <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-8 text-center hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-pointer">
                  <span className="text-gray-400 dark:text-gray-500">
                    Drag your task here...
                  </span>
                </div>
              )}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default KanbanColumn;
