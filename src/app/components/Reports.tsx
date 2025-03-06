/*
 * Reports.tsx
 *
 * Button on bottom right
 * for starting new reports
 */

"use client";

import React, { useState } from "react";
import { LucideIcon, Plus, X } from "lucide-react";
import { createPortal } from "react-dom";

import StandardReport from "./reports/StandardReport";
import ConductReport from "./reports/ConductReport";
import MaintenanceReport from "./reports/MaintenanceReport";

// Report Modal, children = form contents
function Report({
	modalTitle,
	children,
	onClose,
}: {
	modalTitle?: string;
	children?: React.ReactNode;
	onClose?: () => void;
}) {
	return (
		<div className="absolute z-50 flex h-svh w-svw flex-row items-center justify-center bg-black/50 align-middle">
			<div className="flex flex-col gap-[0.75rem] rounded-lg bg-white p-[1.25rem]">
				<div className="flex min-w-[50rem] flex-row justify-between text-3xl font-bold">
					<p>{modalTitle}</p>
					<button onClick={onClose}>
						<X style={{ width: "1em", height: "1em" }} />
					</button>
				</div>
				<div className="justify-left flex flex-col gap-[0.75rem]">
					{children}
				</div>
				<div className="flex flex-row-reverse gap-[0.75rem]">
					<Button label="Submit" />
					<Button label="Save Draft" />
				</div>
			</div>
		</div>
	);
}

// + Button and Children Buttons
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

export default function Reports() {
	const [active, setActive] = useState(false);
	const [showStandardReport, setShowStandardReport] = useState(false);
	const [showConductReport, setShowConductReport] = useState(false);
	const [showMaintenanceReport, setShowMaintenanceReport] = useState(false);

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
					<Button
						label="Standard Report"
						onClick={() => {
							setShowStandardReport(true);
						}}
					/>
					<Button
						label="Conduct Report"
						onClick={() => {
							setShowConductReport(true);
						}}
					/>
					<Button
						label="Maintenance Report"
						onClick={() => {
							setShowMaintenanceReport(true);
						}}
					/>
				</>
			)}
			{showStandardReport &&
				createPortal(
					<Report
						onClose={() => {
							setShowStandardReport(false);
						}}
						modalTitle="New Standard Report">
						<StandardReport />
					</Report>,
					document.body,
				)}
			{showConductReport &&
				createPortal(
					<Report
						onClose={() => {
							setShowConductReport(false);
						}}
						modalTitle="New Conduct Report">
						<ConductReport />
					</Report>,
					document.body,
				)}
			{showMaintenanceReport &&
				createPortal(
					<Report
						onClose={() => {
							setShowMaintenanceReport(false);
						}}
						modalTitle="New Maintenance Report">
						<MaintenanceReport />
					</Report>,
					document.body,
				)}
		</div>
	);
}
