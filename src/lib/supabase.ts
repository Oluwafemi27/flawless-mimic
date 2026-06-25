import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Don't throw at module load time — only fail when the client is actually used
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : (() => {
      const stub = new Proxy({} as ReturnType<typeof createClient>, {
        get: () => {
          throw new Error("Missing Supabase credentials: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY");
        },
      });
      return stub;
    })();
