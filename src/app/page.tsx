/*
 * Dashboard
 */

import { Sun, Sunset, Moon, CalendarDays } from "lucide-react";
import { inter } from "@/app/ui/fonts";

import SidebarItem from "./components/SidebarItem";
import Roster from "./components/Dashboard/Roster";
import Announcements from "./components/Dashboard/Announcements";

import { ClipboardList, Megaphone } from "lucide-react";
import createServerClient from "@/app/utils/supabase/server";
import Calendar from "./components/Dashboard/Calendar";

function HourGreeting({ name }: { name: string }) {
	"use client";

	const hour = new Date().getHours();

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
				{name}
			</p>
		</span>
	);
}

async function Greeting() {
	const supabase = await createServerClient();
	const session = await supabase.auth.getUser();

	return (
		<HourGreeting
			name={session.data.user?.user_metadata.name || "Residential Living Staff"}
		/>
	);
}

export default function Dashboard() {
	return (
		<div className="flex h-full w-full flex-col gap-[1.25rem] p-[1.25rem]">
			<Greeting />
			<div className="flex w-full flex-row gap-[1.25rem]">
				<div className="flex w-full flex-col gap-[1.25rem]">
					<SidebarItem title="Calendar" Icon={CalendarDays}>
						<Calendar />
					</SidebarItem>

					<SidebarItem Icon={ClipboardList} title="Your Floor">
						<Roster />
					</SidebarItem>
				</div>

				<div className="flex w-[36rem] flex-col gap-[1.25rem]">
					<SidebarItem
						href="/announcements"
						Icon={Megaphone}
						title="Announcements">
						{/* <Announcements /> */}
					</SidebarItem>
				</div>
			</div>
		</div>
	);
}
