"use client";

import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import SidebarTask from "../SidebarTask";

export default function Calendar() {
	const [selected, setSelected] = useState<Date>(new Date());
	const [month, setMonth] = useState<Date>(new Date());
	const today = new Date();

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
			<div className="flex w-fit flex-col gap-[0.5rem]">
				<DayPicker
					mode="single"
					required
					showOutsideDays
					selected={selected}
					onSelect={setSelected}
					month={month}
					onMonthChange={setMonth}
					classNames={{
						day_button:
							"text-center size-8 hover:bg-magenta rounded-md hover:text-white transition-all duration-100",
						root: `${getDefaultClassNames().root}`,
						nav: "flex justify-between",
						chevron: "border-2 border-magenta/15 rounded-md p-1",
						weekdays: `text-center`,
						month: "text-center",
						outside: "text-center opacity-40",
						selected: "bg-magenta text-white text-center rounded-md size-8",
					}}
				/>
				{!(
					selected.getMonth().toString() + selected.getDate().toString() ==
					today.getMonth().toString() + today.getDate().toString()
				) && (
					<button
						className="w-full rounded-md bg-magenta p-[0.25rem] text-sm font-semibold text-white duration-100 hover:bg-saffron"
						onClick={() => {
							setSelected(today);
							setMonth(today);
						}}>
						Jump to Today
					</button>
				)}
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
