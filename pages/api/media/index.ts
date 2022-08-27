import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../src/utils/supabaseClient';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  // res.status(200).json({ name: 'John Doe' });

  const { data, error } = await supabase
    .from('ig_backup')
    .select()
    .order('taken_at', { ascending: false });

  if (error) {
    throw new Error(`${error.message}: ${error.details}`);
  }

  res.status(200).json({ data });
};
