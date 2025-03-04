import React from "react";
import supabase from "../../utils/supabase";
import { formatDate } from "../../utils/common";

interface MailEntry {
	mailroomName: string;
	fName: string;
	lName: string;
	id: string;
	roomNo: string;
	packageType: string;
	receivedAt: string;
}

function MailEntry({ mailroomName, fName, lName, id, roomNo, packageType, receivedAt }: MailEntry) {
	return (
		<div className="flex flex-row justify-between">
			<span className="w-full">
				<p>{mailroomName}</p>
			</span>
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
			<span className="w-full">
				<p>{packageType}</p>
			</span>
			<span className="w-full">
				<p>{receivedAt}</p>
			</span>
		</div>
	);
}

async function MailTable() {
	const { data: mail_record } = await supabase
	.from("mail_record")
	.select("id,student_id(id,first_name,last_name),mailroom_id(id, name),type,received_at")
	.order("received_at", { ascending: false })
	.is('issued_date', null)

	return (
		<div className="flex flex-col overflow-clip rounded-sm">
			{mail_record !== null && mail_record.map((item, idx) => (
				<MailEntry
					key={`mail-record-${idx}`}
					mailroomName={item.mailroom_id.name}
					fName={item.student_id.first_name}
					lName={item.student_id.last_name}
					id={item.student_id.id.toString()}
					roomNo={"4"}
					packageType={item.type}
					receivedAt={formatDate(item.received_at)}
				/>
			))}
		</div>
	);
}

export default function Mailroom() {
	return (
		<div className="flex flex-col gap-[1.25rem]">
			<div className="flex flex-row justify-between font-bold">
				<span className="w-full">
					<p>Mailroom</p>
				</span>
				<span className="w-full">
					<p>First</p>
				</span>
				<span className="w-full">
					<p>Last</p>
				</span>
				<span className="w-full">
					<p>ID</p>
				</span>
				<span className="w-full">
					<p>Room</p>
				</span>
				<span className="w-full">
					<p>Type</p>
				</span>
				<span className="w-full">
					<p>Received At</p>
				</span>
			</div>
			<MailTable />
		</div>
	);
}
