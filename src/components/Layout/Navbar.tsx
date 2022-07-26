import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.svg';

export const Navbar = () => {
  return (
    <section className='max-w-full mx-auto md:max-w-3xl lg:max-w-7xl'>
      <nav className='flex flex-none w-full py-8 mx-auto'>
        <Link href='/'>
          <a>
            <Image
              src={Logo}
              alt="Logo of Ahmad Ihsan's website"
              height={48}
              width={48}
            />
          </a>
        </Link>
      </nav>
    </section>
  );
};
