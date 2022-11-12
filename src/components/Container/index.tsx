import { ReactNode } from 'react';

export const Container = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return <section className='container px-4 mx-auto'>{children}</section>;
};
