import React from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function ChatHeader() {
  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avatar type="sm" image={"/profile"} />
        <div className="flex flex-col">
          <span className="text-primary-strong">Demo</span>
          <span className="text-secondary text-sm">Online/Offline</span>
        </div>
      </div>
      <div className="flex gap-6 ">
        <MdCall className="text-panel-header-icon cursor-pointer text-xl" />
        <IoMdVideocam className="text-panel-header-icon cursor-pointer text-xl" />
        <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-xl" />
        <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl" />
      </div>
    </div>
  );
}

export default ChatHeader;
