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
        <div className="flex flex-col h-dvh w-dvw">
          <Topbar />
          <div className="flex flex-row h-full w-full">
            <Sidebar />
            <div className="flex flex-col p-[1.25rem] w-full min-h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
