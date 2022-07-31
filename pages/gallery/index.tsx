import { Layout } from '../../src/components';
import { HomepageData } from '../../src/types';
import { supabase } from '../../src/utils/supabaseClient';

export async function getStaticProps() {
  const { data: photo, error: photosError } = await supabase
    .from('ig_photos')
    .select('*')
    .limit(1);

  return {
    props: {
      data: { photo },
    },
  };
}

export default function GalleryMain({ data }: { data: HomepageData }) {
  return (
    <Layout>
      <h1>Gallery main page</h1>
    </Layout>
  );
}
