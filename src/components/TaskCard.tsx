
import React from 'react';

interface TaskCardProps {
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

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  progress,
  progressColor,
  date,
  comments,
  likes,
  members,
  maxProgress
}) => {
  const progressPercentage = (progress / maxProgress) * 100;
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
      
      {/* Progress Section */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Progress</span>
          <span className="text-xs font-medium text-gray-700">{progress}/{maxProgress}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{date}</span>
        <div className="flex items-center space-x-3">
          {comments && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs text-gray-500">{comments}</span>
            </div>
          )}
          {likes && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs text-gray-500">{likes}</span>
            </div>
          )}
          {members && (
            <div className="flex -space-x-1">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs text-white font-medium">{member}</span>
                </div>
              ))}
              {members.length > 2 && (
                <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white font-medium">+{members.length - 2}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
