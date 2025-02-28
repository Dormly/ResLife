"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PathSegment {
	display: string;
	link: string;
}

function formatPathSegments(path: string): PathSegment[] {
	if (!path) {
		return [];
	}

	const pathWithoutQuery = path.split("?")[0];
	const segments = pathWithoutQuery.replace(/^\/|\/$/g, "").split("/");

	if (segments.length === 1 && segments[0] === "") {
		return [{ display: "Dashboard", link: "/" }];
	}

	const formattedSegments: PathSegment[] = [];
	let currentPath = "";

	segments.forEach((segment) => {
		if (segment === "") return;

		currentPath += `/${segment}`;

		const words = segment.replace(/-/g, " ").split(" ");
		const capitalizedWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1),
		);
		const display = capitalizedWords.join(" ");

		formattedSegments.push({
			display,
			link: currentPath,
		});
	});

	return formattedSegments;
}

export default function DynamicPath() {
	const path = usePathname();

	const pathSegments = formatPathSegments(path);

	return (
		<div>
			<Link href="/" className="text-white/65">
				Example University
			</Link>
			{" / "}
			{pathSegments.map((segment, index) =>
				index < pathSegments.length - 1 ? (
					<span key={index}>
						<Link href={segment.link}>{segment.display}</Link>
						<span> / </span>
					</span>
				) : (
					<Link href={segment.link} key={index} className="font-bold">
						{segment.display}
					</Link>
				),
			)}
		</div>
	);
}
