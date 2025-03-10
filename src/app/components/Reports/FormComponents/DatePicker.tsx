"use client";
export default function DatePicker({
	title,
	time = false,
}: {
	title: string;
	time?: boolean;
}) {
	return (
		<div className="flex w-full flex-col gap-[0.25rem]">
			<p className="font-bold">{title}</p>
			<div className="flex w-fit flex-row gap-[0.25rem] border-2">
				<input className="w-fit" type="date" />
				{time && <input className="w-fit" type="time" />}
			</div>
		</div>
	);
}
