import { Logo, ThemeSwitch, ViewToolbar } from '../index';

export const Navbar = () => {
  return (
    <section className='max-w-full p-5 mx-auto lg:p-8 md:max-w-3xl lg:max-w-7xl'>
      <nav className='grid w-full h-12 grid-flow-col mx-auto auto-cols-auto'>
        <Logo />
        <ViewToolbar />
        <ThemeSwitch />
      </nav>
    </section>
  );
};
