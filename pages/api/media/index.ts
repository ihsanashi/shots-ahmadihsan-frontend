import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase, getPagination } from '../../../src/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  _req: NextApiRequest,
  res: NextApiResponse,
  currentPage = 0,
  perPage = 10
) => {
  const { from, to } = getPagination(currentPage, 10);
  const { data, count, error } = await supabase
    .from('ig_backup')
    .select('*', { count: 'exact' })
    .order('taken_at', { ascending: false })
    .range(from, to);

  if (error) {
    throw new Error(`${error.message}: ${error.details}`);
  }

  res.status(200).json({
    meta: {
      perPage,
      totalCount: count,
      currentPage,
      pageCount: 'page count',
    },
    data,
  });
};
