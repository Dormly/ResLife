import { createClient } from "@/app/utils/supabase/server";
import Link from "next/link";

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

async function RosterTable() {
	const supabase = await createClient();
	const session = await supabase.auth.getUser();

	if (!session.data.user) {
		return null;
	}

	const { data: floor_staff } = await supabase
		.from("floor_staff")
		.select("user_uuid,floor_id(id,floor_name, building_id(abbreviation))")
		.eq("user_uuid", session.data.user.id);

	const roster: RosterEntry[] = [];

	if (floor_staff) {
		const promises = floor_staff.map(async (staff) => {
			const { data: student_bookings } = await supabase
				.from("student_bookings")
				.select(
					"student_id(id, first_name, last_name), room_space_id(room_id(room, floor_id(id,building_id(abbreviation))))",
				);
			if (student_bookings) {
				student_bookings.forEach((booking) => {
					if (booking.room_space_id.room_id.floor_id.id === staff.floor_id.id) {
						roster.push({
							fName: booking.student_id?.first_name
								? booking.student_id.first_name
								: "",
							lName: booking.student_id?.last_name
								? booking.student_id.last_name
								: "",
							id: booking.student_id?.id
								? booking.student_id.id.toString()
								: "",
							roomNo:
								staff.floor_id.building_id.abbreviation +
								" " +
								booking.room_space_id.room_id.room,
						});
					}
				});
			}
		});
		await Promise.all(promises);
	}

	//.lte('start_date', Date.now());
	// .lte('end_date', Date.now());
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
					id={item.id}
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
