"use client";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import {
	LayoutDashboard,
	Construction,
	FileText,
	Cog,
	SunMoon,
	CalendarClock,
} from "lucide-react";

import Image from "next/image";
import Button from "@/app/components/button";

const Topbar = () => {
	return (
		<div className="flex flex-row justify-between bg-magenta p-[1.25rem]">
			<div>
				<p>left</p>
			</div>
			<div>
				<p>right</p>
			</div>
		</div>
	);
};

export default Topbar;
