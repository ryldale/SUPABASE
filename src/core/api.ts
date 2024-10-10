import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ryilskilclibfnbzoklz.supabase.co";
const supabaseAPIKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aWxza2lsY2xpYmZuYnpva2x6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU1OTIsImV4cCI6MjA0NDEyMTU5Mn0.vCWwKwBArjUNgNklOj8WhjUqmGQlTSuGxlvDrChZl9g";

export const supabase = createClient(supabaseUrl, supabaseAPIKey);
