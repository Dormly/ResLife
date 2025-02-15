import Link from "next/link";

export default function SidebarTask({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<Link
			href="/"
			className="flex items-center gap-3 rounded-md transition-all duration-100 hover:bg-magenta/10"
		>
			<span className="h-full w-1 rounded-md bg-magenta"></span>
			<div className="flex flex-col">
				<strong>{title}</strong>
				<p>{subtitle}</p>
			</div>
		</Link>
	);
}
