import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				magenta: "#8534EE",
				saffron: "#E8AA00",
				violet: "#E980FC",
				night: "#0D160B",
				magnolia: "#FBF7FE",
				lime: "#5EC26A",
			},
			screens: {
				phones: "1160px",
			},
		},
	},
	plugins: [],
} satisfies Config;
