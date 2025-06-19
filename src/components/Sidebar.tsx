import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme();

  const [showTeam, setShowTeam] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showTasks, setShowTasks] = useState(true);
  const [showReminders, setShowReminders] = useState(true);
  const [showMessengers, setShowMessengers] = useState(true);

  return (
    <div className="w-80 bg-white dark:bg-gray-950 text-white h-screen flex flex-col font-semibold py-6 fixed top-0 left-16 z-20">
      {/* Header */}
      <div className="p-6 border-gray-700 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6 pt-5">
          <h1 className="text-2xl font-semibold text-black dark:text-white">
            Projects
          </h1>
          <Plus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>

        <div className="space-y-4">
          {/* Team Section */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowTeam((prev) => !prev)}
          >
            <span className="text-gray-400 font-semibold">Team</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                showTeam ? "rotate-180" : ""
              }`}
            />
          </div>

          {showTeam && (
            <>
              {/* Projects Section */}
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setShowProjects((prev) => !prev)}
                >
                  <span className="text-black dark:text-white">Projects</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      showProjects ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {showProjects && (
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="text-gray-500">All projects (3)</div>
                    <div className="text-black font-medium border-2 bg-gray-100 dark:bg-gray-500 rounded-xl px-1 py-1 w-fit">
                      Design system
                    </div>
                    <div className="text-gray-500">User flow</div>
                    <div className="text-gray-500">Ux research</div>
                  </div>
                )}
              </div>

              {/* Tasks Section */}
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setShowTasks((prev) => !prev)}
                >
                  <span className="text-black dark:text-white">Tasks</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      showTasks ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {showTasks && (
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="text-gray-500">All tasks (11)</div>
                    <div className="text-gray-500">To do (4)</div>
                    <div className="text-black font-medium border-2 bg-gray-100 dark:bg-gray-500 rounded-xl px-1 py-1 w-fit">
                      In progress (4)
                    </div>
                    <div className="text-gray-500">Done (3)</div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex-1 p-6">
        <div className="space-y-6">
          {/* Reminders */}
          <div>
            <div
              className="text-gray-400 flex items-center justify-between cursor-pointer mb-3"
              onClick={() => setShowReminders((prev) => !prev)}
            >
              <span className="dark:text-white">Reminders</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  showReminders ? "rotate-180" : ""
                }`}
              />
            </div>
            {showReminders && (
              <div className="ml-4 text-sm text-gray-500">
                <div className="mb-1">Daily standup</div>
                <div className="mb-1">Meeting with team</div>
              </div>
            )}
          </div>

          {/* Messengers */}
          <div>
            <div
              className="text-gray-400 flex items-center justify-between cursor-pointer mb-3"
              onClick={() => setShowMessengers((prev) => !prev)}
            >
              <span className="dark:text-white">Messengers</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  showMessengers ? "rotate-180" : ""
                }`}
              />
            </div>
            {showMessengers && (
              <div className="ml-4 text-sm text-gray-500">
                <div className="mb-1">Slack</div>
                <div className="mb-1">Teams</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-gray-300 dark:border-gray-700">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-1 flex items-center w-fit space-x-1">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 w-full"
          >
            <span
              className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${
                !isDark ? "bg-white text-black shadow" : "text-gray-400"
              }`}
            >
              ☀️ Light
            </span>
            <span
              className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${
                isDark ? "bg-white text-black shadow" : "text-gray-400"
              }`}
            >
              🌙 Dark
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
