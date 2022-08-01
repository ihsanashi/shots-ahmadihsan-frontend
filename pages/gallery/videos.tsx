import { Container, Layout } from '../../src/components';
import { Media } from '../../src/types';
import { getVideos } from '../../src/api';

export async function getStaticProps() {
  const videos = await getVideos();

  return {
    props: {
      videos,
    },
  };
}

export default function VideosPage({ videos }: { videos: Media[] }) {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
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
      </Container>
    </Layout>
  );
}
