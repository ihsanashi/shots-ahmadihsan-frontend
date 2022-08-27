import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../src/utils/supabaseClient';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: photo, error } = await supabase.from('ig_backup');

  if (error) throw new Error(`${error.message}: ${error.details}`);

  res.status(200).json({ photo });
};
