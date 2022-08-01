import { supabase } from '../utils/supabaseClient';

export async function getVideos() {
  const { data, error } = await supabase.from('ig_videos').select('*');

  return data;
}
