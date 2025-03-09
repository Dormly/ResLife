"use client";

import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./supabase";
import assert from "assert";

export function createClient() {
	assert(process.env.SUPABASE_URL, "env.SUPABASE_URL is not set");
	assert(
		process.env.SUPABASE_SERVICE_KEY,
		"env.SUPABASE_SERVICE_KEY is not set",
	);
	return createBrowserClient<Database>(
		process.env.SUPABASE_URL!,
		process.env.SUPABASE_SERVICE_KEY!,
	);
}
