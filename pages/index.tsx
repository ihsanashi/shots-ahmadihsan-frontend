import Image from 'next/image';
import { supabase } from '../src/utils/supabaseClient';
import { HomepageData } from '../src/types';
import { Gallery, Layout } from '../src/components';

export async function getStaticProps() {
  const { data: photos, error: photosError } = await supabase
    .from('ig_photos')
    .select('*')
    .range(0, 4);

  const { data: stories, error: storiesError } = await supabase
    .from('ig_stories')
    .select('*')
    .range(0, 4);

  const { data: videos, error: videosError } = await supabase
    .from('ig_videos')
    .select('*');

  return {
    props: {
      data: {
        photos,
        stories,
        videos,
      },
    },
  };
}

export default function Home({ data }: { data: HomepageData }) {
  const HOMEPAGE_MEDIA = Object.values(data).flat();

  return (
    <Layout>
      <Gallery />
      {data.photos.map((photo) => (
        <div key={photo.id}>
          <Image src={photo.cloudinary_path} alt='' height={400} width={400} />
        </div>
      ))}
    </Layout>
  );
}
