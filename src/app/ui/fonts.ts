import { DM_Serif_Display, Geist, Inter } from "next/font/google";

export const dmSerif = DM_Serif_Display({
    variable: "--font-dm-serif",
    weight: "400",
    subsets: ["latin"],
    display: "swap"
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
})