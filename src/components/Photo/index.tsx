import Image from 'next/image';

interface PhotoProps {
  src: string;
  caption: string;
}

export const Photo = ({ src, caption }: PhotoProps) => {
  return (
    <div className='relative'>
      <Image src={src} alt={caption} height='300' width='300' />
    </div>
  );
};
