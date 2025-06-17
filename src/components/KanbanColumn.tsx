
import React from 'react';
import { Plus } from 'lucide-react';
import TaskCard from './TaskCard';

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

interface KanbanColumnProps {
  title: string;
  count: number;
  tasks: Task[];
  addNewTask: () => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, count, tasks, addNewTask }) => {
  return (
    <div className="flex-1 min-w-80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="font-medium text-gray-700">{title}</h2>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            ({count})
          </span>
        </div>
        <button 
          onClick={addNewTask}
          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add new task</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            subtitle={task.subtitle}
            progress={task.progress}
            progressColor={task.progressColor}
            date={task.date}
            comments={task.comments}
            likes={task.likes}
            members={task.members}
            maxProgress={task.maxProgress}
          />
        ))}
        
        {title === "Done" && (
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors cursor-pointer">
            <span className="text-gray-400">Drag your task here...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
