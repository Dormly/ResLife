/*
 * NewButton.tsx
 *
 * Button on bottom right for starting
 * new reports
 */

"use client";

import { useState } from "react";
import { LucideIcon, Plus, X } from "lucide-react";

function Button({
	label,
	Icon,
	SecondaryIcon,
	active,
	onClick,
}: {
	label?: string;
	Icon?: LucideIcon;
	SecondaryIcon?: LucideIcon;
	active?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
	return (
		<button
			onClick={onClick}
			className="w-fit rounded-full bg-magenta p-[1rem] font-bold text-white duration-100 hover:bg-saffron">
			{label}
			{!active && Icon && <Icon style={{ width: "1em", height: "1em" }} />}
			{active && SecondaryIcon && (
				<SecondaryIcon style={{ width: "1em", height: "1em" }} />
			)}
		</button>
	);
}

function NewButton() {
	const [active, setActive] = useState(false);

	return (
		<div className="flex flex-col-reverse items-end gap-[1rem]">
			<Button
				Icon={Plus}
				SecondaryIcon={X}
				active={active}
				onClick={() => {
					setActive(!active);
				}}
			/>
			{active && (
				<>
					<Button label="Standard Report" />
					<Button label="Conduct Report" />
					<Button label="Maintenance Report" />
				</>
			)}
		</div>
	);
}

export default NewButton;
