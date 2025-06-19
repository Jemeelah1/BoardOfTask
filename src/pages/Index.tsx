import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";
import { useToast } from "../hooks/use-toast";
import { Icon } from "lucide-react";
import IconSidebar from "@/components/IconSidebar";

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

const Index = () => {
  const { toast } = useToast();

  const [tasks, setTasks] = useState<TaskColumns>({
    todo: [
      {
        id: "1",
        title: "Design new ui presentation",
        subtitle: "Dribbble marketing",
        progress: 7,
        maxProgress: 10,
        progressColor: "bg-orange-400",
        date: "24 Aug 2022",
        comments: 7,
        likes: 2,
        members: ["A", "B"],
      },
      {
        id: "2",
        title: "Add more ui/ux mockups",
        subtitle: "Pinterest promotion",
        progress: 4,
        maxProgress: 10,
        progressColor: "bg-orange-400",
        date: "25 Aug 2022",
        comments: 6,
        likes: 4,
        members: ["C", "D"],
      },
      {
        id: "3",
        title: "Design few mobile screens",
        subtitle: "Dropbox mobile app",
        progress: 3,
        maxProgress: 10,
        progressColor: "bg-red-400",
        date: "26 Aug 2022",
        comments: 6,
        likes: 4,
        members: ["E", "F"],
      },
      {
        id: "4",
        title: "Create a tweet and promote",
        subtitle: "Twitter marketing",
        progress: 2,
        maxProgress: 14,
        progressColor: "bg-red-400",
        date: "27 Aug 2022",
        members: ["G", "H"],
      },
    ],
    inProgress: [
      {
        id: "5",
        title: "Design system update",
        subtitle: "Oreo website project",
        progress: 3,
        maxProgress: 10,
        progressColor: "bg-orange-400",
        date: "12 Nov 2022",
        members: ["I", "J"],
      },
      {
        id: "6",
        title: "Create brand guideline",
        subtitle: "Oreo branding project",
        progress: 7,
        maxProgress: 10,
        progressColor: "bg-orange-400",
        date: "13 Nov 2022",
        comments: 2,
        likes: 13,
        members: ["K", "L"],
      },
      {
        id: "7",
        title: "Create wireframe for ios app",
        subtitle: "Oreo ios app project",
        progress: 4,
        maxProgress: 10,
        progressColor: "bg-red-400",
        date: "14 Nov 2022",
        members: ["M", "N"],
      },
      {
        id: "8",
        title: "Create ui kit for layout",
        subtitle: "Crypto mobile app",
        progress: 3,
        maxProgress: 10,
        progressColor: "bg-red-400",
        date: "15 Nov 2022",
        comments: 23,
        likes: 12,
        members: ["O", "P"],
      },
    ],
    done: [
      {
        id: "9",
        title: "Add product to the market",
        subtitle: "UI marketplace",
        progress: 10,
        maxProgress: 10,
        progressColor: "bg-green-500",
        date: "6 Jan 2022",
        comments: 1,
        likes: 5,
        members: ["Q", "R"],
      },
      {
        id: "10",
        title: "Launch product promotion",
        subtitle: "Kickstarter campaign",
        progress: 10,
        maxProgress: 10,
        progressColor: "bg-green-500",
        date: "7 Jan 2022",
        comments: 17,
        likes: 3,
        members: ["S", "T"],
      },
      {
        id: "11",
        title: "Make twitter banner",
        subtitle: "Twitter marketing",
        progress: 10,
        maxProgress: 10,
        progressColor: "bg-green-500",
        date: "8 Jan 2022",
        members: ["U", "V"],
      },
    ],
  });

  const addNewTask = (columnId: keyof TaskColumns) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: "New Task",
      subtitle: "Subtitle",
      progress: 0,
      progressColor: "bg-orange-400",
      date: new Date().toLocaleDateString(),
      comments: 0,
      likes: 0,
      members: ["U"],
      maxProgress: 10,
    };

    setTasks((prev) => ({
      ...prev,
      [columnId]: [newTask, ...prev[columnId]],
    }));
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = source.droppableId as keyof TaskColumns;
    const destColumn = destination.droppableId as keyof TaskColumns;

    const sourceTasks = Array.from(tasks[sourceColumn]);
    const destTasks =
      sourceColumn === destColumn ? sourceTasks : Array.from(tasks[destColumn]);

    const [draggedTask] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, draggedTask);

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destColumn]: destTasks,
    });

    toast({
      title: "Task Moved",
      description: `Task moved to ${destColumn
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pl-96">
      <IconSidebar />
      <Sidebar />

      <div className="flex flex-col h-screen overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto p-8">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex space-x-6 overflow-x-auto">
              <KanbanColumn
                title="To do"
                count={tasks.todo.length}
                tasks={tasks.todo}
                addNewTask={addNewTask}
                columnId="todo"
                onEdit={function (
                  id: string,
                  updatedTask: { title: string; subtitle: string }
                ): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (id: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <KanbanColumn
                title="In progress"
                count={tasks.inProgress.length}
                tasks={tasks.inProgress}
                addNewTask={addNewTask}
                columnId="inProgress"
                onEdit={function (
                  id: string,
                  updatedTask: { title: string; subtitle: string }
                ): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (id: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <KanbanColumn
                title="Done"
                count={tasks.done.length}
                tasks={tasks.done}
                addNewTask={addNewTask}
                columnId="done"
                onEdit={function (
                  id: string,
                  updatedTask: { title: string; subtitle: string }
                ): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (id: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Index;
