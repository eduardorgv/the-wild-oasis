import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sxdfulhifseflzekeomj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZGZ1bGhpZnNlZmx6ZWtlb21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzOTk4MTIsImV4cCI6MjAxMDk3NTgxMn0.6OGB9WMGO1MQRftcDTgIjUd_CBwI7N4tuqQDG-IAW2g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
