import Announcements from "../components/Dashboard/Announcements";

export default async function AnnouncementPage() {
	return (
		<>
			<Announcements request={10} display={10}></Announcements>
		</>
	);
}
