import Image from 'next/image';
import { supabase } from '../src/utils/supabaseClient';
import { HomepageData } from '../src/types';
import { Container, Layout } from '../src/components';

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('ig_backup')
    .select()
    .order('taken_at', { ascending: false });

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: { data: HomepageData }) {
  const HOMEPAGE_MEDIA = Object.values(data).flat();

  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-1 md:grid-cols-3'>
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
        </div>
      </Container>
    </Layout>
  );
}
