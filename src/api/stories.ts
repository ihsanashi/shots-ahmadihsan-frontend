import { supabase } from '../utils/supabaseClient';

export async function getStories() {
  const { data, error } = await supabase.from('ig_stories').select('*');

  return data;
}
