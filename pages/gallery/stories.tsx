import Image from 'next/image';
import { Container, Layout } from '../../src/components';
import { Media } from '../../src/types';
import { supabase } from '../../src/utils/supabaseClient';

export async function getStaticProps() {
  const { data, error } = await supabase.from('ig_stories').select('*');

  return {
    props: {
      stories: data,
    },
  };
}

export default function StoriesPage({ stories }: { stories: Media[] }) {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          {stories.map((story) => (
            <div key={story.id}>
              {story.path.toLocaleLowerCase().includes('mp4') ? (
                <video height={400} width={400} controls>
                  <source src={story.cloudinary_path} type='video/mp4' />
                  <source src={story.aws_s3_path} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={story.cloudinary_path}
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
