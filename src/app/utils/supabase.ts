import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../supabase";

const supabaseUrl: string = "https://ertqiknveclsdywsbiuu.supabase.co";

const supabaseServiceKey: string =
	process.env.SUPABASE_SERVICE_KEY === undefined
		? ""
		: process.env.SUPABASE_SERVICE_KEY;

export default createClient<Database>(supabaseUrl, supabaseServiceKey);
