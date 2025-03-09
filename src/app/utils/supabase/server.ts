import { createServerClient } from "@supabase/ssr";
import assert from "assert";
import { cookies } from "next/headers";
import { Database } from "../supabase";

export async function createClient() {
	assert(process.env.SUPABASE_URL, "env.SUPABASE_URL is not set");
	assert(process.env.SUPABASE_ANON_KEY, "env.SUPABASE_SERVICE_KEY is not set");

	const cookieStore = await cookies();

	return createServerClient<Database>(
		process.env.SUPABASE_URL!,
		process.env.SUPABASE_ANON_KEY!, // normally anon key
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options),
						);
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
			},
		},
	);
}
