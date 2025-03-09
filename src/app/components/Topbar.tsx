import ProfileButton from "./Topbar/ProfileButton";
import SearchBar from "./Topbar/SearchBar";
import InboxButton from "./Topbar/InboxButton";
import DynamicPath from "./Topbar/DynamicPath";
import { getUniversityInfo } from "../utils/supabase/server";

export default async function Topbar() {
	const universityInfo = await getUniversityInfo();

	if (!universityInfo) {
		return null;
	}

	return (
		<div className="flex flex-row items-center justify-between bg-magenta p-2 px-6 text-white">
			<div>
				<DynamicPath university={universityInfo.name} />
			</div>
			<div className="flex flex-row items-center justify-between gap-6">
				<SearchBar />
				<InboxButton />
				<ProfileButton />
			</div>
		</div>
	);
}
