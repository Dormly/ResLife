import { Announcement } from "@/app/components/Dashboard/Announcements";
import supabase from "@/app/utils/supabase";

export default async function AnnouncementPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// TODO: Error catching
	const id = parseInt(await params.then((p) => p.id));

	const { data: announcement } = await supabase
		.from("announcements")
		.select("id,creator_id(name,profile),title,description,created_at")
		.eq("id", id)
		.single();

	if (!announcement) {
		return <div className="p-[1.25rem]">Announcement not found.</div>;
	}

	return (
		<div className="p-[1.25rem]">
			<Announcement
				id={id}
				author={announcement.creator_id.name}
				profile={announcement.creator_id.profile ?? ""}
				date={announcement.created_at}
				title={announcement.title}
				content={announcement.description}
				clamp={false}
			/>
		</div>
	);
}
