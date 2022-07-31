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
        {stories.map((story) => (
          <div key={story.id}>
            <Image
              src={story.cloudinary_path}
              alt=''
              height={400}
              width={400}
            />
          </div>
        ))}
      </Container>
    </Layout>
  );
}
