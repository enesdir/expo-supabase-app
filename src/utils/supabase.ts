import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_ANON_KEY} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
});
