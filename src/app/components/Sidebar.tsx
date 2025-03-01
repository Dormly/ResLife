import { ListTodo, AudioWaveform, CalendarDays } from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarTask from "./SidebarTask";

export default function Sidebar() {
	return (
		<div className="flex h-full min-w-[26rem] flex-col items-center gap-[1rem] overflow-y-scroll border-r-2 border-magenta/15 bg-magnolia p-[1.25rem]">
			<SidebarItem title="Tasks" Icon={ListTodo}>
				<SidebarTask
					title="Weekly Floor Reports"
					subtitle="3/4 Reports Completed"></SidebarTask>
				<SidebarTask
					title="Program Planning"
					subtitle="1/2 Monthly Programs Planned"></SidebarTask>
				<SidebarTask
					title="Decorations"
					subtitle="Task completed!"></SidebarTask>
			</SidebarItem>

			<SidebarItem title="Activity" Icon={AudioWaveform}>
				<SidebarTask
					title="Floor Program Approved"
					subtitle="Slime Social Program Approved"></SidebarTask>
				<SidebarTask
					title="Shift Switch Request Approved"
					subtitle="Tap to view details"></SidebarTask>
			</SidebarItem>

			<SidebarItem title="Calendar" Icon={CalendarDays}>
				<strong>Today</strong>
				<SidebarTask
					title="7:00pm - 9:00pm"
					subtitle="Williams Lobby Office Shift"></SidebarTask>
				<SidebarTask title="10:00pm" subtitle="Building Meeting"></SidebarTask>
				<strong>Tomorrow</strong>
				<SidebarTask
					title="3:00pm - 4:00pm"
					subtitle="Slime Social Floor Program"></SidebarTask>
				<SidebarTask
					title="10:00pm - 6:00am"
					subtitle="RA Coverage Shift"></SidebarTask>
			</SidebarItem>
		</div>
	);
}
