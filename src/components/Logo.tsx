import Image from 'next/image';
import Link from 'next/link';
import logoPath from '../../public/logo.svg';

export const Logo = () => {
  return (
    <div className='flex flex-row items-center'>
      <Link href='/'>
        <a>
          <h3 className='text-lg font-medium md:text-2xl' aria-label='Wordmark logo, Ahmad Ihsan'>Ahmad Ihsan</h3>
        </a>
      </Link>
    </div>
  );
};
