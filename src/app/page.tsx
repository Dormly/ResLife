/*
 * Dashboard
 */

import { Sun, Sunset, Moon } from "lucide-react";
import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";

import SidebarItem from "./components/SidebarItem";
import Roster from "./components/Dashboard/Roster";
import Announcements from "./components/Dashboard/Announcements";

import {
	ClipboardList,
	Package,
	MessageSquareWarning,
	Megaphone,
} from "lucide-react";
import supabase from "./utils/supabase";

const hour = new Date().getHours();

async function Greeting() {
	const session = await getServerSession();

	const { data, error } = await supabase
		.from("users")
		.select("name")
		.eq("email", session?.user?.email || "");

	return (
		<span className="flex flex-row items-center gap-2 text-4xl">
			{hour < 12 && <Sun style={{ width: "1em", height: "1em" }} />}
			{hour >= 12 && hour < 18 && (
				<Sunset style={{ width: "1em", height: "1em" }} />
			)}
			{hour >= 18 && <Moon style={{ width: "1em", height: "1em" }} />}
			<p className={`text-nowrap font-bold ${inter.variable}`}>
				{hour < 12 && "Good Morning, "}
				{hour >= 12 && hour < 18 && "Good Afternoon, "}
				{hour >= 18 && "Good Evening, "}
				{data && data.length > 0 && data[0].name}
			</p>
		</span>
	);
}

export default function Dashboard() {
	return (
		<div className="flex h-full w-full flex-col gap-[1.25rem] overflow-y-scroll">
			<Greeting />
			<div className="flex w-full flex-row gap-[1.25rem]">
				<div className="flex w-full flex-col gap-[1.25rem]">
					<SidebarItem Icon={ClipboardList} title="Rosters">
						<Roster />
					</SidebarItem>
					<SidebarItem Icon={Package} title="Mailroom" />
				</div>

				<div className="flex w-[36rem] flex-col gap-[1.25rem]">
					<SidebarItem Icon={Megaphone} title="Announcements">
						<Announcements />
					</SidebarItem>
					<SidebarItem Icon={MessageSquareWarning} title="Recent Reports" />
				</div>
			</div>
		</div>
	);
}
