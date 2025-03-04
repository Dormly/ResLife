import ProfileButton from "./Topbar/ProfileButton";
import SearchBar from "./Topbar/SearchBar";
import InboxButton from "./Topbar/InboxButton";
import DynamicPath from "./Topbar/DynamicPath";

export default function Topbar({ university }: { university: string }) {

	return (
		<div className="flex flex-row items-center justify-between bg-magenta p-2 px-6 text-white">
			<div>
				<DynamicPath university={university}/>
			</div>
			<div className="flex flex-row items-center justify-between gap-6">
				<SearchBar />
				<InboxButton />
				<ProfileButton />
			</div>
		</div>
	);
}
