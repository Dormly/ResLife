import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../supabase";

const supabaseUrl: string = "https://ertqiknveclsdywsbiuu.supabase.co";
const supabaseKey: string =
    process.env.SUPABASE_KEY === undefined ? "" : process.env.SUPABASE_KEY;
const supabaseServiceKey: string =
    process.env.SUPABASE_SERVICE_KEY === undefined ? "" : process.env.SUPABASE_SERVICE_KEY;
//const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default createClient<Database>(supabaseUrl, supabaseServiceKey);