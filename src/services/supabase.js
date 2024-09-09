import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eiurmneatjewipxoyrfq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdXJtbmVhdGpld2lweG95cmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MDg0MjcsImV4cCI6MjA0MTI4NDQyN30.AY_DvqzSQrRXmxykMcw12i2X88Z4OoPSuqutVfk7Bp4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
