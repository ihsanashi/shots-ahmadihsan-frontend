import { supabase } from '../utils/supabaseClient';

export async function getPhotos() {
  const { data, error } = await supabase.from('ig_photos').select('*');

  return data;
}

export async function getSinglePhoto({ id }: { id: string }) {
  const { data, error } = await supabase
    .from('ig_photos')
    .select('*')
    .eq('id', id)
    .single();

  return data;
}
