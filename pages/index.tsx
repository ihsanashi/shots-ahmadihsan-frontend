import Image from 'next/image';
import { supabase } from '../src/utils/supabaseClient';
import { Photo } from '../src/types/photo';
import { FeedMode, Gallery, Layout } from '../src/components';

export async function getStaticProps({}) {
  const { data, error } = await supabase
    .from('ig_photos')
    .select('*')
    .range(0, 10);

  return {
    props: {
      photos: data,
    },
  };
}

export default function Home({ photos }: { photos: Photo[] }) {
  return (
    <Layout>
      <FeedMode />
      <Gallery />
      {photos.map((photo) => (
        <div key={photo.id}>
          <Image src={photo.cloudinary_path} alt='' height={400} width={400} />
          <p className='text-gray-600'>{photo.caption}</p>
        </div>
      ))}
    </Layout>
  );
}
