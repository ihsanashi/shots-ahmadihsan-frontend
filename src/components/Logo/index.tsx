import Link from 'next/link';

export const Logo = () => {
  return (
    <div className='flex flex-row items-center'>
      <Link href='/'>
        <a>
          <h3
            className='text-lg font-normal uppercase md:text-2xl'
            aria-label='Wordmark logo, Ahmad Ihsan'
          >
            Ahmad Ihsan
          </h3>
        </a>
      </Link>
    </div>
  );
};
