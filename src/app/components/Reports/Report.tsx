"use client";
import Image from "next/image";

import { Pencil } from "lucide-react";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<span className="flex flex-col gap-[0.25rem]">
			<p className="font-semibold">{title}</p>
			{children}
		</span>
	);
}

function UserTags({ children }: { children: React.ReactNode }) {
	return <span className="flex flex-row gap-[0.5rem]">{children}</span>;
}

function UserTag({ name, imageSrc }: { name: string; imageSrc: string }) {
	return (
		<div className="flex w-fit flex-row items-center gap-[0.5rem] rounded-md bg-magenta/5 p-[0.5rem]">
			{imageSrc == "" ? (
				<div className="h-[2.5rem] w-[2.5rem] rounded-full bg-gray-400" />
			) : (
				<Image
					src={imageSrc}
					width={128}
					height={128}
					className="h-[3rem] w-[3rem] rounded-full bg-gray-400"
					alt={name}
				/>
			)}
			<p>{name}</p>
		</div>
	);
}

export default function Report({
	title,
	author,
	profile,
	type,
	description,
	date,
	created_date,
}: {
	title: string;
	author: string;
	profile?: string;
	type: string;
	description: string;
	date: string;
	created_date: string;
}) {
	return (
		<div className="flex flex-col gap-[0.5rem]">
			<span className="flex justify-between text-3xl">
				<p className="font-bold">{title}</p>
				<button>
					<Pencil style={{ width: "1em", height: "1em" }} />
				</button>
			</span>

			{/* TODO: Allow multiple authors and display properly */}
			<Section title="Authors">
				<UserTags>
					<UserTag name={author} imageSrc={profile ?? ""} />
				</UserTags>
			</Section>

			<Section title="Report Type">
				<p>{type}</p>
			</Section>

			<Section title="Time Occurred">
				<p>{date}</p>
			</Section>

			<Section title="Report Submitted">
				<p>{created_date}</p>
			</Section>

			<Section title="Description">
				<p>{description}</p>
			</Section>

			{/* TODO: Map users tagged in report from DB */}
			<Section title="Residents Involved">
				<UserTags>
					<UserTag name={author} imageSrc={profile ?? ""} />
				</UserTags>
			</Section>
		</div>
	);
}
