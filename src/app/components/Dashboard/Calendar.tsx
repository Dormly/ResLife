"use client";

import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import SidebarTask from "../SidebarTask";

export default function Calendar() {
	const [selected, setSelected] = useState<Date>(new Date());

	function mapDateToString(inputDate: Date): string {
		const options: Intl.DateTimeFormatOptions = {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric",
		};

		return inputDate.toLocaleDateString("en-US", options);
	}

	return (
		<div className="flex w-full gap-8">
			<div className="w-fit">
				<DayPicker
					mode="single"
					required
					selected={selected}
					onSelect={setSelected}
					classNames={{
						selected: "bg-magenta text-white text-center rounded-md size-8",
						day_button:
							"text-center size-8 hover:bg-magenta rounded-md hover:text-white transition-all duration-100",
						root: `${getDefaultClassNames().root}`,
						nav: "flex justify-between",
						chevron: "border-2 border-magenta/15 rounded-md p-1",
						weekdays: `text-center`,
						month: "text-center",
					}}
				/>
			</div>
			<div className="w-full">
				<div className="flex h-full w-full flex-col gap-2">
					<strong className="w-full rounded-md bg-magenta px-2 py-1 text-lg text-white">
						{mapDateToString(selected)}
					</strong>
					<SidebarTask
						title="7:00pm - 9:00pm"
						subtitle="Williams Lobby Office Shift"></SidebarTask>
					<SidebarTask
						title="10:00pm"
						subtitle="Building Meeting"></SidebarTask>
				</div>
			</div>
		</div>
	);
}
