import React from "react";

import exdb from "../exdb.json";
import Link from "next/link";

const roster = exdb.roster;

interface RosterEntry {
	fName: string;
	lName: string;
	id: string;
	roomNo: string;
}

function RosterEntry({ fName, lName, id, roomNo }: RosterEntry) {
	return (
		<Link
			href="/"
			className="flex flex-row justify-between rounded-md px-2 py-1 transition-all duration-100 odd:bg-magenta/5 hover:bg-magenta/15">
			<span className="w-full">
				<p>{fName}</p>
			</span>
			<span className="w-full">
				<p>{lName}</p>
			</span>
			<span className="w-full">
				<p>{id}</p>
			</span>
			<span className="w-full">
				<p>{roomNo}</p>
			</span>
		</Link>
	);
}

function RosterTable() {
	return (
		<div className="flex flex-col gap-1 overflow-clip rounded-sm">
			<div className="flex flex-row justify-between rounded-md bg-magenta px-2 py-1 font-semibold text-white">
				<span className="w-full">
					<p>First Name</p>
				</span>
				<span className="w-full">
					<p>Last Name</p>
				</span>
				<span className="w-full">
					<p>ID</p>
				</span>
				<span className="w-full">
					<p>Room No</p>
				</span>
			</div>
			{roster.map((item, idx) => (
				<RosterEntry
					key={`roster-entry-${idx}`}
					fName={item.fName}
					lName={item.lName}
					id={item.ID}
					roomNo={item.roomNo}
				/>
			))}
		</div>
	);
}

export default function Roster() {
	return (
		<div className="flex flex-col gap-[1.25rem]">
			<RosterTable />
		</div>
	);
}
