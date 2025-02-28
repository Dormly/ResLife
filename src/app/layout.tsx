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
	title: "ResLife",
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

	let { data } = await supabase
		.from("users")
		.select("id,email,name")
		.eq("email", session.user.email == null ? "" : session.user.email);

	if (data?.length === 0) {
		console.log("User not found in DB, creating new user");
		({ data } = await supabase
			.from("users")
			.insert([
				{ email: session.user.email || "", name: session.user.name || "" },
			])
			.select("id,email,name"));
	}

	return (
		<html lang="en">
			<SessionProvider session={session}>
				<body className={`${inter.variable} overflow-x-clip antialiased`}>
					<div className="absolute z-0 flex h-svh w-svw flex-col overflow-y-clip">
						<Topbar />
						<div className="flex h-full w-full flex-row overflow-clip">
							<Sidebar />
							<div className="flex w-full flex-col overflow-clip p-[1.25rem]">
								{children}
							</div>
						</div>
					</div>

					<div className="absolute bottom-0 right-0 z-10 p-[1.25rem]">
						<Reports />
					</div>
				</body>
			</SessionProvider>
		</html>
	);
}
