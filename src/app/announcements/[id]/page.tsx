import { Announcement } from "@/app/components/Dashboard/Announcements";
import { createClient } from "@/app/utils/supabase/server";

export default async function AnnouncementPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// TODO: Error catching
	const id = parseInt(await params.then((p) => p.id));

	const supabase = await createClient();

	const { data: announcement } = await supabase
		.from("announcements")
		.select(
			"id,creator_uuid(student_id(first_name, last_name)),title,description,created_at",
		)
		.eq("id", id)
		.single();

	if (!announcement) {
		return <div className="p-[1.25rem]">Announcement not found.</div>;
	}

	return (
		<div className="p-[1.25rem]">
			<Announcement
				id={id}
				author={`${announcement.creator_uuid?.student_id.first_name ?? ""} ${announcement.creator_uuid?.student_id.last_name ?? ""}`}
				profile={""} // TODO: Add profile picture
				date={announcement.created_at}
				title={announcement.title}
				content={announcement.description}
				clamp={false}
			/>
		</div>
	);
}
