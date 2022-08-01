import { ReactNode } from 'react';

export const Container = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return <div className='container px-4 mx-auto'>{children}</div>;
};
