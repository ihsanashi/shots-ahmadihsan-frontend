import { supabase } from '../utils/supabaseClient';

export async function getVideos() {
  const { data, error } = await supabase.from('ig_videos').select('*');

  return data;
}

export async function getSingleVideo({ id }: { id: string }) {
  const { data, error } = await supabase
    .from('ig_videos')
    .select('*')
    .eq('id', id)
    .single();

  return data;
}
