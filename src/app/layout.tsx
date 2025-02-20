import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../supabase";

import SessionProvider from "./components/SessionProvider";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import NewButton from "./components/NewButton";

const supabaseUrl: string = "https://ertqiknveclsdywsbiuu.supabase.co";
const supabaseKey: string =
	process.env.SUPABASE_KEY === undefined ? "" : process.env.SUPABASE_KEY;
const supabaseServiceKey: string =
	process.env.SUPABASE_SERVICE_KEY === undefined
		? ""
		: process.env.SUPABASE_SERVICE_KEY;
//const supabase = createClient<Database>(supabaseUrl, supabaseKey);
const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

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

	let { data, error } = await supabase
		.from("users")
		.select("email")
		.eq("email", session.user.email == null ? "" : session.user.email);

	if (data?.length === 0) {
		console.log("User not found in DB, creating new user");
		({ data, error } = await supabase
			.from("users")
			.insert([
				{ email: session.user.email || "", name: session.user.name || "" },
			])
			.select("email"));
	}

	return (
		<html lang="en">
			<SessionProvider session={session}>
				<body className={`${inter.variable} antialiased`}>
					<div className="absolute z-0 flex h-svh w-svw flex-col overflow-clip">
						<Topbar />
						<div className="flex w-full flex-row">
							<Sidebar />
							<div className="flex w-full flex-col p-[1.25rem]">{children}</div>
						</div>
					</div>

					<div className="absolute bottom-0 right-0 z-10 p-[1.25rem]">
						<NewButton />
					</div>
				</body>
			</SessionProvider>
		</html>
	);
}
