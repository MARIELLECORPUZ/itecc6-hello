import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://rznnfgwjdgwrvrkwqcus.supabase.co' 
const supabaseKey = 'sb_publishable_OI0NTBqOKkCscMG8MFw96w_eWfTlOYx' 
export const supabase = createClient(supabaseUrl, supabaseKey)