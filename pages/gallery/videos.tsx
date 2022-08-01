import { Layout } from '../../src/components';
import { Media } from '../../src/types';
import { supabase } from '../../src/utils/supabaseClient';

export async function getStaticProps() {
  const { data, error } = await supabase.from('ig_videos').select('*');

  return {
    props: {
      videos: data,
    },
  };
}

export default function VideosPage({ videos }: { videos: Media[] }) {
  return (
    <Layout>
      <div className='grid grid-cols-3 gap-4'>
        {videos.map((video) => (
          <div key={video.id}>
            <video width={400} height={400} controls>
              <source src={video.cloudinary_path} type='video/mp4' />
              <source src={video.aws_s3_path} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </Layout>
  );
}
