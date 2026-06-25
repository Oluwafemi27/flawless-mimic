import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xtfvqbuxmtelfmdllifc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZnZxYnV4bXRlbGZtZGxsaWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDU5NTAsImV4cCI6MjA5NzkyMTk1MH0.4JqfJLkUKtwOfoQdlMqp1QVMh_cR2lsTJ_LaOseWcDA";

export const supabase = createClient(supabaseUrl, supabaseKey);
