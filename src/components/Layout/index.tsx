export { Footer } from './Footer';
export { TopBar } from './TopBar';

import { ReactNode } from 'react';
import { Footer, TopBar } from './index';

interface Props {
  children?: ReactNode | ReactNode[];
}

export const Layout = ({ children }: Props) => {
  return (
    <main className='max-w-full mx-auto md:max-w-4xl'>
      <TopBar />
      {children}
      <Footer />
    </main>
  );
};
