import { ListTodo, AudioWaveform, MessageSquareWarning } from "lucide-react";

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

			<SidebarItem Icon={MessageSquareWarning} title="Recent Reports" />
		</div>
	);
}
