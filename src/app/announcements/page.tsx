import Announcements from "../components/Dashboard/Announcements";

export default async function AnnouncementPage() {
	return (
		<div className="p-[1.25rem]">
			<Announcements request={10} display={10}></Announcements>
		</div>
	);
}
