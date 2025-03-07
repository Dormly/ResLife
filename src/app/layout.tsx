import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SessionProvider from "./components/SessionProvider";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import Reports from "./components/Reports";

export const metadata: Metadata = {
	title: "Dormly | ResLife",
	description: "Dormly ResLife - Residential Community Management System",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	const session = await getServerSession(authOptions);

	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

	const user = session.data;

	console.log("us", session);
	return (
		<html lang="en">
			<SessionProvider session={session}>
					<body className={`${inter.variable} overflow-x-clip antialiased`}>
						<div className="flex h-svh w-svw flex-col">
							<Topbar university={user !== null && user.university_id.name !== null ? user.university_id.name : ""}/>
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
			</SessionProvider>
		</html>
	);
}
