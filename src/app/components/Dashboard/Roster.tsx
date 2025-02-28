import React from "react";

import exdb from "../exdb.json";

const roster = exdb.roster;

interface RosterEntry {
	fName: string;
	lName: string;
	id: string;
	roomNo: string;
}

function RosterEntry({ fName, lName, id, roomNo }: RosterEntry) {
	return (
		<div className="flex flex-row justify-between">
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
		</div>
	);
}

function RosterTable() {
	return (
		<div className="flex flex-col overflow-clip rounded-sm">
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
			<h1>Williams / 4B</h1>
			<RosterTable />
		</div>
	);
}
