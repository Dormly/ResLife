import Link from "next/link";
import exdb from "../exdb.json";

const announcements = exdb.announcements;

function getAnnouncements() {
	return announcements.map((item) => (
		<Announcement
			author={item.author}
			date={item.date}
			title={item.title}
			content={item.content}
		/>
	));
}

function Announcement({
	author,
	date,
	title,
	content,
}: {
	author: string;
	date: string;
	title: string;
	content: string;
}) {
	return (
		<div className="flex flex-col gap-1 rounded-sm p-[0.25rem]">
			<p className="text-2xl font-bold">{title}</p>
			<span className="flex flex-row items-center justify-between pb-2">
				<div className="flex items-center gap-2">
					<div className="h-5 w-5 rounded-full bg-gray-400" />
					<p className="font-medium">{author}</p>
				</div>
				<p>{date}</p>
			</span>
			<p className="opacity-60">{content}</p>
		</div>
	);
}

export default function Announcements() {
	return (
		<div className="flex flex-col gap-[1.25rem]">
			{announcements.slice(0, 3).map((item, idx) => (
				<>
					<Announcement
						author={item.author}
						date={item.date}
						title={item.title}
						content={item.content}
					/>
					{idx < 2 && <div className="h-[1px] w-full bg-zinc-200" />}
				</>
			))}

			{announcements.length > 3 && (
				<>
					<div className="h-[1px] w-full bg-zinc-200" />
					<Link
						href="/announcements"
						className="text-sm text-gray-500 hover:text-magenta hover:underline">
						+ {announcements.length - 3} more
					</Link>
				</>
			)}
		</div>
	);
}
