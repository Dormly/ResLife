/*
 * Dashboard
 */

import { Sun, Sunset, Moon } from "lucide-react";
import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";

const hour = new Date().getHours();

async function Greeting() {
	const session = await getServerSession();
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
				{session?.user?.name}
			</p>
		</span>
	);
}

export default function Dashboard() {
	return (
		<div className="flex w-full flex-col gap-[1.25rem]">
			<Greeting />
			<div className="flex w-full flex-row gap-[1.25rem]">
				<div className="flex w-full flex-col"></div>

				<div className="flex w-full flex-col"></div>
			</div>
		</div>
	);
}
