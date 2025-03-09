import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/ui/fonts";
import { createClient } from "@/app/utils/supabase/server";

import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import Reports from "./components/Reports";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Dormly | ResLife",
	description: "Dormly ResLife - Residential Community Management System",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const supabase = await createClient();
	const session = await supabase.auth.getUser();

	if (!session.data.user) {
		redirect("/api/auth");
	}

	return (
		<html lang="en">
			<body className={`${inter.variable} overflow-x-clip antialiased`}>
				<div className="flex h-svh w-svw flex-col">
					<Topbar university={"Text"} />
					<div className="flex h-full w-full flex-row overflow-hidden">
						<div className="h-full w-[26rem] flex-shrink-0 overflow-y-auto">
							<Sidebar />
						</div>
						<div className="flex w-full flex-1 flex-col overflow-y-auto">
							{children}
						</div>
					</div>
				</div>

				<div className="fixed bottom-0 right-0 z-10 p-[1.25rem]">
					<Reports />
				</div>
			</body>
		</html>
	);
}
