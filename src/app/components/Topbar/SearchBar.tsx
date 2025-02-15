"use client";

import { Command } from "lucide-react";

export default function SearchBar() {
	return (
		<button className="flex w-[15rem] flex-row items-center justify-between gap-[1.25rem] rounded-md bg-magnolia p-1.5 px-3 text-magenta/35">
			<p>Search for anything</p>
			<div className="flex flex-row items-center">
				<Command style={{ width: "1em", height: "1em" }} strokeWidth={3} />
				<p className="font-bold">K</p>
			</div>
		</button>
	);
}
