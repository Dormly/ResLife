import type { Metadata } from "next";
import "./globals.css";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../supabase";

import SessionProvider from "./components/SessionProvider";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/Topbar";

const supabaseUrl: string = "https://ertqiknveclsdywsbiuu.supabase.co";
const supabaseKey: string =
	process.env.SUPABASE_KEY === undefined ? "" : process.env.SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

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

	const { data, error } = await supabase
		.from('Users')
		.select('email')
		.eq('email', session.user.email == null ? "" : session.user.email);

	if (data?.length === 0) {
		await supabase.from("Users").insert([{ email: session.user.email || "", name: session.user.name || "" }]).select();
	}

	console.log(data);
	console.log(error);
	return (
		<html lang="en">
			<SessionProvider session={session}>
				<body className={`${inter.variable} antialiased`}>
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
			</SessionProvider>
		</html>
	);
}
