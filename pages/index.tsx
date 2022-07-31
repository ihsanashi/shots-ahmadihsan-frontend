import Image from 'next/image';
import { supabase } from '../src/utils/supabaseClient';
import { HomepageData } from '../src/types';
import { Grid, Layout } from '../src/components';

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
      <Grid columns='3' gap='4'>
        {HOMEPAGE_MEDIA.map((media) => (
          <div key={media.id}>
            {media.path.toLocaleLowerCase().includes('mp4') ? (
              <video height={400} width={400} controls>
                <source src={media.cloudinary_path} type='video/mp4' />
                <source src={media.aws_s3_path} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={media.cloudinary_path}
                alt=''
                height={400}
                width={400}
              />
            )}
          </div>
        ))}
      </Grid>
    </Layout>
  );
}
