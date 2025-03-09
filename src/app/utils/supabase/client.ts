import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../supabase";

export function createClient() {
	return createBrowserClient<Database>(
		process.env.SUPABASE_URL!,
		process.env.SUPABASE_SERVICE_KEY!, // normally anon key
	);
}
