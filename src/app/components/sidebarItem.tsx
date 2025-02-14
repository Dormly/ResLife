import Link from "next/link";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import { LucideIcon, ArrowRight } from "lucide-react";

export default function SidebarItem({
	title,
	Icon,
	href = "",
	children,
}: {
	title?: string;
	Icon?: LucideIcon;
	href?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex w-full flex-col items-center gap-[0.625rem]">
			<div
				className={`flex w-full flex-row text-[1.25rem] font-bold ${inter.className}`}
			>
				<Link
					className="w-full rounded-md p-[0.5rem] duration-100 hover:bg-magenta/15"
					href={href}
				>
					<div className="flex flex-row items-center justify-between">
						<div className="flex flex-row items-center gap-2">
							{Icon && <Icon size={24} />}
							{title && <p>{title}</p>}
						</div>
						<ArrowRight />
					</div>
				</Link>
			</div>
			<div className="flex w-full flex-col gap-2 rounded-md border-2 border-magenta/15 bg-white p-[1.25rem]">
				{children}
			</div>
		</div>
	);
}
