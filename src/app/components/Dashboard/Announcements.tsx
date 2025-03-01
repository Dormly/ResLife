import Link from "next/link";
import Image from "next/image";
import supabase from "../../utils/supabase";
import { formatDate } from "../../utils/common";

function Announcement({
	author,
	profile,
	date,
	title,
	content,
}: {
	key: number;
	author: string;
	profile: string;
	date: string;
	title: string;
	content: string;
}) {
	return (
		<div className="flex flex-col gap-1 rounded-sm p-[0.25rem]">
			<p className="text-2xl font-bold">{title}</p>
			<span className="flex flex-row items-center justify-between pb-2">
				<div className="flex items-center gap-2">
					{profile == "" ? (<div className="h-5 w-5 rounded-full bg-gray-400" />) : (<Image src={profile} width={40} height={40} className="h-5 w-5 rounded-full bg-gray-400" alt={author}/>)}
					
					<p className="font-medium">{author}</p>
				</div>
				<p>{date}</p>
			</span>
			<p className="line-clamp-3 opacity-60">{content}</p>
		</div>
	);
}

/**
 * Component to display a list of announcements.
 *
 * @param {number} [props.request=5] - The number of announcements to request from the database. Defaults to 5.
 * @param {number} [props.display=3] - The number of announcements to display. Defaults to 3.
 */
export default async function Announcements({
	request = 5,
	display = 3,
}: {
	request?: number;
	display?: number;
}) {
	const { data: announcements } = await supabase
		.from("announcements")
		.select("id,creator_id(name,profile),title,description,created_at")
		.order("created_at", { ascending: false })
		.limit(request);

	return (
		<div className="flex flex-col gap-[1.25rem]">
			{announcements !== null &&
				announcements.slice(0, display).map((item, idx) => (
					<>
						<Announcement
							key={item.id}
							author={item.creator_id.name}
							profile={item.creator_id.profile || ""}
							date={formatDate(item.created_at)}
							title={item.title}
							content={item.description}
						/>
						{idx < announcements.slice(0, display).length - 1 && (
							<div className="h-[1px] w-full bg-zinc-200" />
						)}
					</>
				))}

			{announcements !== null && announcements.length > display && (
				<>
					<div className="h-[1px] w-full bg-zinc-200" />
					<Link
						href="/announcements"
						className="text-sm text-gray-500 hover:text-magenta hover:underline">
						+ {announcements.length - display} more
					</Link>
				</>
			)}
		</div>
	);
}
