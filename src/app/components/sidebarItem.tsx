import Link from "next/link";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import { LucideIcon, ArrowRight } from "lucide-react";

export default function SidebarItem({
    title,
    Icon,
    href = "",
    children,
}: {
    title?: string;
    Icon?: LucideIcon;
    href?: string;
    children?: React.ReactNode;
}) {
    return (
    <div className="flex flex-col items-center gap-[0.625rem] w-full">
        <div className={`flex flex-row w-full text-[1.25rem] font-bold ${inter.className}`}>
            <Link className="w-full p-[0.5rem] rounded-xl hover:bg-slate-200 duration-100" href={href}>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        {Icon && <Icon size={24}/>}
                        {title && <p>{title}</p>}
                    </div>
                    <ArrowRight/>
                </div>
            </Link>
        </div>
        <div className="p-[1.25rem] bg-white w-full rounded-xl border-magenta border-2">
            {children}
        </div>
    </div>
    );
}