"use client";

import { usePathname } from "next/navigation";

function formatPathSegments(path: string): string[] {
	if (!path) {
		return [];
	}

	const pathWithoutQuery = path.split("?")[0];

	const segments = pathWithoutQuery.replace(/^\/|\/$/g, "").split("/");

	const formattedSegments = segments.map((segment) => {
		const words = segment.replace(/-/g, " ").split(" ");

		const capitalizedWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1),
		);

		return capitalizedWords.join(" ");
	});

	if (formattedSegments.length === 1 && formattedSegments[0] === "") {
		return ["Dashboard"];
	}

	return formattedSegments.length < 1 ? [] : formattedSegments;
}

export default function Logo() {
	const path = usePathname();

	const pathSegments = formatPathSegments(path);

	return (
		<div>
			<span className="text-white/65">Example University</span>
			{" / "}
			{pathSegments.map((segment, index) =>
				index < pathSegments.length - 1 ? (
					<span key={index}>{segment} / </span>
				) : (
					<span key={index} className="font-bold">
						{segment}
					</span>
				),
			)}
		</div>
	);
}
