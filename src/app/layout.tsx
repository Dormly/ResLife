import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SessionProvider from "./components/SessionProvider";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import Reports from "./components/Reports";
import supabase from "./utils/supabase";

export const metadata: Metadata = {
	title: "Dormly | ResLife",
	description: "Dormly ResLife - Residential Community Management System",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	const session = await getServerSession();

	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

	let { data: user } = await supabase
		.from("users")
		.select("id,email,name,profile,university_id(id, name)")
		.eq("email", session.user.email == null ? "" : session.user.email)
		.single();

	if (user === null) {
		console.log("User not found in DB, creating new user");
		({ data: user } = await supabase
			.from("users")
			.insert([
				{
					email: session.user.email || "",
					name: session.user.name || "",
					profile: session.user.image || "",
					university_id: 1,
				},
			])
			.select("id,email,name,profile,university_id(id, name)")
			.single());
	}

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
