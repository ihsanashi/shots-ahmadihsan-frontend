import Link from 'next/link';
import { Media } from '../../../src/types';
import { getVideos } from '../../../src/api';
import { Container, Layout } from '../../../src/components';

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
              <Link href={`/gallery/videos/${video.id.toString()}`}>
                <video width={400} height={400} controls>
                  <source src={video.cloudinary_path} type='video/mp4' />
                  <source src={video.aws_s3_path} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
