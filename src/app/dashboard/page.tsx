import { Sun, Sunset, Moon } from "lucide-react";
import { inter } from "@/app/ui/fonts";

{
	/* TODO: Get user name from DB */
}
const name = "Name";
const hour = new Date().getHours();

const getGreeting = () => {
	if (hour < 12) {
		return "Good Morning,";
	} else if (hour >= 12 && hour < 18) {
		return "Good Afternoon,";
	} else {
		return "Good Evening,";
	}
};

const getGreetingIcon = () => {
	if (hour < 12) {
		return <Sun size={42} />;
	} else if (hour >= 12 && hour < 18) {
		return <Sunset size={42} />;
	} else {
		return <Moon size={42} />;
	}
};

export default function Dashboard() {
	return (
		<div className="flex h-full w-full flex-col gap-[1.25rem]">
			<span className="flex flex-row items-center gap-2">
				{getGreetingIcon()}
				<p className={`text-nowrap text-4xl font-bold ${inter.variable}`}>
					{getGreeting()} {name}
				</p>
			</span>
			<div className="flex min-h-full w-full flex-row gap-[1.25rem]">
				<div className="flex h-full w-full flex-col"></div>

				<div className="flex h-full w-full flex-col"></div>
			</div>
		</div>
	);
}
