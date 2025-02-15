import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SessionProvider from "./components/SessionProvider";
import Topbar from "@/app/components/Topbar";
import Content from "@/app/components/Content";

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
					<div className="flex flex-col">
						<Topbar />
						<div className="">
							<Content>{children}</Content>
						</div>
					</div>
				</body>
			</SessionProvider>
		</html>
	);
}
