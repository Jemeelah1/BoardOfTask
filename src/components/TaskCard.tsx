import React, { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { MoreHorizontal } from "lucide-react";
import { createTask } from "../../services/taskService";

interface TaskCardProps {
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
  index: number;
  onEdit: (
    id: string,
    updatedTask: { title: string; subtitle: string }
  ) => void;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  subtitle,
  progress,
  progressColor,
  date,
  comments,
  likes,
  members,
  maxProgress,
  index,
  onEdit,
  onDelete,
}) => {
  const progressPercentage = (progress / maxProgress) * 100;

  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editSubtitle, setEditSubtitle] = useState(subtitle);

  const handleSave = () => {
    onEdit(id, { title: editTitle, subtitle: editSubtitle });
    setIsEditing(false);
  };

  const handleCreateTask = async () => {
    try {
      const { data: newTask } = await createTask({
        title: "New task",
        subtitle: "This is a new task",
        progress: 0,
        maxProgress: 10,
        date: new Date().toISOString(),
      });

      console.log("Created task:", newTask);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer ${
            snapshot.isDragging ? "rotate-2 shadow-lg" : ""
          }`}
        >
          {/* Ellipsis Menu */}
          <div className="absolute top-2 right-2">
            <button onClick={() => setShowMenu((prev) => !prev)}>
              <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 rounded shadow z-10">
                {!isEditing ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditing(true);
                        handleCreateTask();
                        setShowMenu(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 w-full text-left"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(id);
                        setShowMenu(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-red-100 dark:hover:bg-red-600 text-red-600 w-full text-left"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSave();
                        setShowMenu(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-blue-100 dark:hover:bg-blue-600 text-blue-600 w-full text-left"
                    >
                      Save
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditing(false);
                        setShowMenu(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 w-full text-left"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Editable Fields */}
          {isEditing ? (
            <>
              <input
                className="w-full mb-2 text-gray-800 dark:text-white font-medium bg-transparent border-b dark:border-gray-600 focus:outline-none"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                className="w-full text-sm text-gray-500 dark:text-gray-400 bg-transparent border-b dark:border-gray-600 focus:outline-none"
                value={editSubtitle}
                onChange={(e) => setEditSubtitle(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <button
                  className="text-sm text-blue-500 hover:underline mr-2"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="text-sm text-gray-500 hover:underline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {subtitle}
              </p>

              {/* Progress Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {progress}/{maxProgress}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {date}
                </span>
                <div className="flex items-center space-x-3">
                  {comments && (
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {comments}
                      </span>
                    </div>
                  )}
                  {likes && (
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {likes}
                      </span>
                    </div>
                  )}
                  {members && (
                    <div className="flex -space-x-1">
                      {members.slice(0, 2).map((member, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center"
                        >
                          <span className="text-xs text-white font-medium">
                            {member}
                          </span>
                        </div>
                      ))}
                      {members.length > 2 && (
                        <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-white font-medium">
                            +{members.length - 2}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
