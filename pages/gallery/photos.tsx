import Image from 'next/image';
import { Layout } from '../../src/components';
import { Media } from '../../src/types';
import { supabase } from '../../src/utils/supabaseClient';

export async function getStaticProps() {
  const { data, error } = await supabase.from('ig_photos').select('*');

  return {
    props: {
      photos: data,
    },
  };
}

export default function PhotosPage({ photos }: { photos: Media[] }) {
  return (
    <Layout>
      <div className='grid grid-cols-3 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image
              src={photo.cloudinary_path}
              alt=''
              height={400}
              width={400}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
