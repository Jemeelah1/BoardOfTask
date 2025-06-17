
import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back, Vincent 👋
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>19 May 2022</span>
          </div>
          
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-medium">V</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">Board view</span>
          </div>
          <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Add view
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
            New template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
