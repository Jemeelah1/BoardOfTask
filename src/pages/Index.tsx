
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import KanbanColumn from '../components/KanbanColumn';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const todoTasks = [
    {
      id: '1',
      title: 'Design new ui presentation',
      subtitle: 'Dribbble marketing',
      progress: 7,
      maxProgress: 10,
      progressColor: 'bg-orange-400',
      date: '24 Aug 2022',
      comments: 7,
      likes: 2,
      members: ['A', 'B']
    },
    {
      id: '2',
      title: 'Add more ui/ux mockups',
      subtitle: 'Pinterest promotion',
      progress: 4,
      maxProgress: 10,
      progressColor: 'bg-orange-400',
      date: '25 Aug 2022',
      comments: 6,
      likes: 4,
      members: ['C', 'D']
    },
    {
      id: '3',
      title: 'Design few mobile screens',
      subtitle: 'Dropbox mobile app',
      progress: 3,
      maxProgress: 10,
      progressColor: 'bg-red-400',
      date: '26 Aug 2022',
      comments: 6,
      likes: 4,
      members: ['E', 'F']
    },
    {
      id: '4',
      title: 'Create a tweet and promote',
      subtitle: 'Twitter marketing',
      progress: 2,
      maxProgress: 14,
      progressColor: 'bg-red-400',
      date: '27 Aug 2022',
      members: ['G', 'H']
    }
  ];

  const inProgressTasks = [
    {
      id: '5',
      title: 'Design system update',
      subtitle: 'Oreo website project',
      progress: 3,
      maxProgress: 10,
      progressColor: 'bg-orange-400',
      date: '12 Nov 2022',
      members: ['I', 'J']
    },
    {
      id: '6',
      title: 'Create brand guideline',
      subtitle: 'Oreo branding project',
      progress: 7,
      maxProgress: 10,
      progressColor: 'bg-orange-400',
      date: '13 Nov 2022',
      comments: 2,
      likes: 13,
      members: ['K', 'L']
    },
    {
      id: '7',
      title: 'Create wireframe for ios app',
      subtitle: 'Oreo ios app project',
      progress: 4,
      maxProgress: 10,
      progressColor: 'bg-red-400',
      date: '14 Nov 2022',
      members: ['M', 'N']
    },
    {
      id: '8',
      title: 'Create ui kit for layout',
      subtitle: 'Crypto mobile app',
      progress: 3,
      maxProgress: 10,
      progressColor: 'bg-red-400',
      date: '15 Nov 2022',
      comments: 23,
      likes: 12,
      members: ['O', 'P']
    }
  ];

  const doneTasks = [
    {
      id: '9',
      title: 'Add product to the market',
      subtitle: 'UI marketplace',
      progress: 10,
      maxProgress: 10,
      progressColor: 'bg-green-500',
      date: '6 Jan 2022',
      comments: 1,
      likes: 5,
      members: ['Q', 'R']
    },
    {
      id: '10',
      title: 'Launch product promotion',
      subtitle: 'Kickstarter campaign',
      progress: 10,
      maxProgress: 10,
      progressColor: 'bg-green-500',
      date: '7 Jan 2022',
      comments: 17,
      likes: 3,
      members: ['S', 'T']
    },
    {
      id: '11',
      title: 'Make twitter banner',
      subtitle: 'Twitter marketing',
      progress: 10,
      maxProgress: 10,
      progressColor: 'bg-green-500',
      date: '8 Jan 2022',
      members: ['U', 'V']
    }
  ];

  const addNewTask = () => {
    toast({
      title: "Add New Task",
      description: "Task creation feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="flex-1 p-8">
          <div className="flex space-x-6 overflow-x-auto">
            <KanbanColumn
              title="To do"
              count={4}
              tasks={todoTasks}
              addNewTask={addNewTask}
            />
            <KanbanColumn
              title="In progress"
              count={4}
              tasks={inProgressTasks}
              addNewTask={addNewTask}
            />
            <KanbanColumn
              title="Done"
              count={3}
              tasks={doneTasks}
              addNewTask={addNewTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
