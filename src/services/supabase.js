import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aasgzeobibllwwsmufyg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc2d6ZW9iaWJsbHd3c211ZnlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY2ODUwNzAsImV4cCI6MTk2MjI2MTA3MH0.UCJ3n6k12-4C_L94DcKb-ohL1a3cy6x3a-X4eqzwGJs'

export const supabase = createClient(supabaseUrl, supabaseKey)

