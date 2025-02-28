import Link from "next/link";
import supabase from "../../utils/supabase";

function Announcement({
	key,
	author,
	date,
	title,
	content,
}: {
	key: number;
	author: string;
	date: string;
	title: string;
	content: string;
}) {
	return (
		<div className="flex flex-col gap-1 rounded-sm p-[0.25rem]" key={key}>
			<p className="text-2xl font-bold">{title}</p>
			<span className="flex flex-row items-center justify-between pb-2">
				<div className="flex items-center gap-2">
					<div className="h-5 w-5 rounded-full bg-gray-400" />
					<p className="font-medium">{author}</p>
				</div>
				<p>{date}</p>
			</span>
			<p className="line-clamp-3 opacity-60">{content}</p>
		</div>
	);
}

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const month = date.getMonth() + 1; // Months are 0-indexed
	const day = date.getDate();
	const year = date.getFullYear();

	return `${month}/${day}/${year}`;
}

export default async function Announcements() {
	const { data: announcements } = await supabase
		.from("announcements")
		.select("id,creator_id,title,description,created_at")
		.order("created_at", { ascending: false })
		.limit(5);

	return (
		<div className="flex flex-col gap-[1.25rem]">
			{announcements !== null &&
				announcements.slice(0, 3).map((item, idx) => (
					<>
						<Announcement
							key={item.id}
							author={item.creator_id.toString()}
							date={formatDate(item.created_at)}
							title={item.title}
							content={item.description}
						/>
						{idx < 2 && <div className="h-[1px] w-full bg-zinc-200" />}
					</>
				))}

			{announcements !== null && announcements.length > 3 && (
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
