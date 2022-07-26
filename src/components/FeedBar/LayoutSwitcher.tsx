import { Columns, Grid, Layout } from 'react-feather';

export const LayoutSwitcher = ({}) => {
  return (
    <div className='flex items-center justify-evenly'>
      <Columns />
      <Grid />
      <Layout />
    </div>
  );
};
