import { createClient } from '@supabase/supabase-js'
import { SUPABASE } from '../config'

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE.URL, SUPABASE.KEY)