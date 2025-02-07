import type { Metadata } from "next";
import "./globals.css";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/topbar";

export const metadata: Metadata = {
	title: "ResLife",
	description: "Dormly ResLife - Residential Community Management System",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				<div className="flex h-dvh w-dvw flex-col">
					<Topbar />
					<div className="flex h-full w-full flex-row">
						<Sidebar />
						<div className="flex min-h-full w-full flex-col p-[1.25rem]">
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
