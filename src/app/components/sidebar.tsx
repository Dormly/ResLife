"use client";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import { ListTodo, AudioWaveform, CalendarDays } from "lucide-react"

import Image from "next/image";
import Button from "@/app/components/button"

import SidebarItem from "./sidebarItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-[1rem] min-h-full p-[1.25rem] min-w-[26rem] bg-magnolia border-r-2 border-magenta">
        <SidebarItem title="Tasks" Icon={ListTodo}>
            
        </SidebarItem>

        <SidebarItem title="Activity" Icon={AudioWaveform}>

        </SidebarItem>

        <SidebarItem title="Calendar" Icon={CalendarDays}>

        </SidebarItem>
    </div>
  );
};

export default Sidebar;