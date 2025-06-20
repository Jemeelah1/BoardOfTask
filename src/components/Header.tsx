import React from "react";
import {
  Filter,
  ArrowUpDown,
  CirclePlus,
  StretchHorizontal,
  BellDot,
  Calendar,
  Search,
} from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome back, Vincent 👋
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 text-xs">
            <Search className="w-4 h-4" />
            <BellDot className="w-4 h-4" />
            <Calendar className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
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
            <span className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
              <StretchHorizontal className="w-5 h-5 text-gray-900 hover:text-white cursor-pointer transition-colors" />
              <span>Board view</span>
            </span>
          </div>
          <button className=" flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
            <CirclePlus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <span>Add view</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button className="bg-gray-900 dark:bg-[#4B69FF] text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
            New template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
