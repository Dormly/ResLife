import type { Metadata } from "next";
import "./globals.css";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { createClient } from '@supabase/supabase-js'

import SessionProvider from "./components/SessionProvider";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/Topbar";

const supabaseUrl = 'https://ertqiknveclsdywsbiuu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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

	{
		/* Redirect to login if no session */
	}
	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

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
