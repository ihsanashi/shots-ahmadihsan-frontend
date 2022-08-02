import { supabase } from '../utils/supabaseClient';

export async function getStories() {
  const { data, error } = await supabase.from('ig_stories').select('*');

  return data;
}

export async function getSingleStory({ id }: { id: string }) {
  const { data, error } = await supabase
    .from('ig_stories')
    .select('*')
    .eq('id', id)
    .single();

  return data;
}
