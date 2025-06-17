
import React from 'react';
import { ChevronDown, Plus, Filter, Sort } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-72 bg-gray-900 text-white h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Projects</h1>
          <Plus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
        
        <div className="space-y-4">
          {/* Team Section */}
          <div className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-300">Team</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          
          {/* Projects Section */}
          <div>
            <div className="flex items-center justify-between cursor-pointer mb-3">
              <span className="text-gray-300">Projects</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="ml-4 space-y-2 text-sm">
              <div className="text-gray-400">All projects (3)</div>
              <div className="text-blue-400 font-medium">Design system</div>
              <div className="text-gray-400">User flow</div>
              <div className="text-gray-400">Ux research</div>
            </div>
          </div>
          
          {/* Tasks Section */}
          <div>
            <div className="flex items-center justify-between cursor-pointer mb-3">
              <span className="text-gray-300">Tasks</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="ml-4 space-y-2 text-sm">
              <div className="text-gray-400">All tasks (11)</div>
              <div className="text-gray-400">To do (4)</div>
              <div className="text-gray-400">In progress (4)</div>
              <div className="text-gray-400">Done (3)</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Icons */}
      <div className="flex-1 p-6">
        <div className="space-y-6">
          <div className="text-gray-400">Reminders</div>
          <div className="text-gray-400">Messengers</div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-400">Light</span>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-sm text-white">Dark</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
