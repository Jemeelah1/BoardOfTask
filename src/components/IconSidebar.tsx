import React from "react";
import {
  LayoutGrid,
  LogOut,
  Ellipsis,
  User,
  Calendar,
  SlidersHorizontal,
  CloudDownload,
  Map,
  FolderKanban,
} from "lucide-react";
import Logo from "@/assets/pngs/Logo.png";

const IconSidebar = () => {
  return (
    <div className="w-16 bg-black text-gray-300 h-screen flex flex-col justify-between items-center py-6 fixed left-0 top-0">
      {/* Top section */}
      <div className="flex flex-col items-center space-y-8">
        <Ellipsis className="w-8 h-8" />
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <LayoutGrid className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
        <User />
        <Calendar />
        <FolderKanban />
        <CloudDownload />
        <Map />
        <SlidersHorizontal className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
      </div>

      {/* Footer logout icon */}
      <div>
        <LogOut className="w-5 h-5 hover:text-red-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default IconSidebar;
