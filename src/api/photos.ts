import { supabase } from '../utils/supabaseClient';

export async function getPhotos() {
  const { data, error } = await supabase.from('ig_photos').select('*');

  return data;
}
