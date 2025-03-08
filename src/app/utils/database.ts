"use server";

import assert from "assert";
import createServerClient from "./supabase/server";
import { redirect } from "next/navigation";

async function signInWith(provider: string) {
	assert(provider === "google", "Only Google is supported");
	assert(process.env.SUPABASE_URL, "env.SUPABASE_URL is not set");
	assert(
		process.env.SUPABASE_SERVICE_KEY,
		"env.SUPABASE_SERVICE_KEY is not set",
	);
	assert(process.env.SITE_URL, "env.SITE_URL is not set");

	const supabase = await createServerClient();
	const authCallbackURL = `${process.env.SITE_URL}/api/auth/callback`;

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: provider,
		options: {
			redirectTo: authCallbackURL,
		},
	});

	if (error) {
		console.error("Error signing in with Google:", error.message);
		return {
			status: 500,
			body: "Internal Server Error",
		};
	}

	redirect(data.url);
}

export async function signInWithGoogle() {
	await signInWith("google");
}

export async function signOut() {
	const supabase = await createServerClient();
	await supabase.auth.signOut();
}
