import Link from 'next/link';

export const TopBar = () => {
  return (
    <section className='max-w-full p-4'>
      <Link href='/'>
        <a>
          <h3 className='text-2xl md:text-4xl'>@ahmadihsan</h3>
        </a>
      </Link>
    </section>
  );
};
