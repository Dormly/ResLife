import ProfileButton from "./Topbar/ProfileButton";
import SearchBar from "./Topbar/SearchBar";
import InboxButton from "./Topbar/InboxButton";
import Logo from "./Topbar/Logo";
import Path from "./Topbar/Path";

export default function Topbar() {
	return (
		<div className="flex flex-row items-center justify-between bg-magenta p-2 px-6 text-white">
			<div>
				<Logo />
				<Path />
			</div>
			<div className="flex flex-row items-center justify-between gap-6">
				<SearchBar />
				<InboxButton />
				<ProfileButton />
			</div>
		</div>
	);
}
