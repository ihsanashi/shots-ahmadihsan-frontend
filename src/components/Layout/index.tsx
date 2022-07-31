export { Footer } from './Footer';
export { Navbar } from './Navbar';

import { ReactNode } from 'react';
import { Footer, Navbar } from './index';

interface Props {
  children?: ReactNode|ReactNode[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
