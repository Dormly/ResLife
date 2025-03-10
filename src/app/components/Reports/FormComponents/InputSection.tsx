"use client";
export enum SectionType {
	ShortResponse = 0,
	Paragraph = 1,
}

export default function InputSection({
	title,
	placeholder,
	type = SectionType.ShortResponse,
}: {
	title: string;
	placeholder?: string;
	type?: SectionType;
}) {
	return (
		<div className="flex w-full flex-col gap-[0.25rem]">
			<p className="font-bold">{title}</p>
			{type == 0 && (
				<input
					className="w-full resize-none rounded-sm border-2"
					name={title}
					placeholder={placeholder}
				/>
			)}
			{type == 1 && (
				<textarea
					className="min-h-[12rem] w-full resize-y rounded-sm border-2"
					name={title}
					placeholder={placeholder}
				/>
			)}
		</div>
	);
}
