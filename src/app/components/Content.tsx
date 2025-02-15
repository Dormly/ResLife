"use client";

import Sidebar from "@/app/components/sidebar";

import {
	PanelGroup,
	Panel,
	PanelResizeHandle
} from "react-resizable-panels";

export default function Content({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className="flex w-full flex-row">
			<PanelGroup
				className="overflow-scroll"
				direction="horizontal"
				autoSaveId="persistence"
			>
				<Panel defaultSize={30} minSize={25}>
					<Sidebar />
				</Panel>
				<PanelResizeHandle />
				<Panel>
					<div className="flex w-full flex-col p-[1.25rem] pb-0">
						{children}
					</div>
				</Panel>
			</PanelGroup>
		</div>
	);
}
