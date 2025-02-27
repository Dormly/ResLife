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
		<div className="flex flex-col rounded-sm p-[0.25rem]">
			<p className="text-2xl font-bold">{title}</p>
			<span className="flex flex-row items-center gap-[0.25rem]">
				<div className="h-5 w-5 rounded-full bg-gray-400" />
				<p className="">{author} |</p>
				<p>{date}</p>
			</span>
			<p>{content}</p>
		</div>
	);
}

export default function Announcements() {
	return (
		<div className="flex flex-col gap-[1.25rem]">
			{announcements.map((item) => (
				<Announcement
					author={item.author}
					date={item.date}
					title={item.title}
					content={item.content}
				/>
			))}
		</div>
	);
}
