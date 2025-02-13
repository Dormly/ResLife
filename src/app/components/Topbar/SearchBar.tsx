"use client";

import { Command } from "lucide-react";

export default function SearchBar() {
	return (
		<div className="flex w-[15rem] flex-row items-center justify-between gap-[1.25rem] rounded-sm border-magenta border-opacity-35 bg-magnolia p-[0.5rem] text-magenta">
			<p className="opacity-35">Search for anything</p>
			<div className="flex flex-row items-center">
				<Command
					className="opacity-35"
					style={{ width: "1em", height: "1em" }}
					strokeWidth={3}
				/>
				<p className="font-bold opacity-35">K</p>
			</div>
		</div>
	);
}
