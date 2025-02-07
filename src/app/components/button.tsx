/*
 *
 *   button.tsx
 *   Custom button component
 *
 *   Props:
 *   Icon            LucideIcon      Icon can be displayed
 *   label           string          Text displayed on the button
 *   href            string          Link to another page
 *   dropdown        boolean         Button has dropdown menu
 *   imageSrc        string          Image displayed in button
 *   bgColor         string          Tailwind format, custom button background (default bg-white)
 *   hoverBgColor    string          Tailwind format, custom hover color (default hover:bg-saffron)
 *   textColor       string          Tailwind format, custom text color (default text-white)
 *   hoverTextColor  string          Tailwind format, custom hover text color (default hover:text-white)
 *   width           string          Tailwind format, custom forced width
 *   height          string          Tailwind format, custom forced height
 *
 */

import Link from "next/link";
import Image from "next/image";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
{
	/* TODO: Change to ChevronUp when dropdown active & button pressed */
}

interface ButtonProps {
	Icon?: LucideIcon;
	label?: string;
	href?: string;
	dropdown?: boolean;
	imageSrc?: string;
	bgColor?: string;
	hoverBgColor?: string;
	textColor?: string;
	hoverTextColor?: string;
	width?: string;
	height?: string;
}

const Button: React.FC<ButtonProps> = ({
	Icon,
	label,
	href = "",
	dropdown = false,
	imageSrc = "",
	bgColor = "bg-white",
	hoverBgColor = "hover:bg-saffron",
	textColor = "text-black",
	hoverTextColor = "hover:text-white",
	width,
	height,
}) => {
	return (
		<Link href={href}>
			<div
				className={`${textColor} ${hoverTextColor} ${bgColor} ${hoverBgColor} ${width} ${height} flex min-h-[4rem] min-w-[4rem] flex-row items-center gap-[0.5rem] rounded-xl p-[1.25rem] text-[1rem] font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-100`}
			>
				{Icon && <Icon size={24} />}
				{label && <p className="text-nowrap">{label}</p>}
				{dropdown && <ChevronDown />}
				{imageSrc && <Image src={imageSrc} alt="" width={48} height={48} />}
			</div>
		</Link>
	);
};

export default Button;
