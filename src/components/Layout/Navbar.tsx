import Link from 'next/link';
import { Logo } from '../index';

export const Navbar = () => {
  return (
    <section className='max-w-full p-5 mx-auto lg:p-8 md:max-w-3xl lg:max-w-7xl'>
      <nav className='grid w-full h-12 grid-flow-col mx-auto auto-cols-auto'>
        <Logo />
        <div className='flex items-center justify-between'>
          <Link href='/gallery/photos'>
            <a>Photos</a>
          </Link>
          <Link href='/gallery/stories'>
            <a>Stories</a>
          </Link>
          <Link href='/gallery/videos'>
            <a>Videos</a>
          </Link>
        </div>
      </nav>
    </section>
  );
};
