import { Media } from '../../../src/types';
import { Params } from '../../../src/interfaces/index';
import { Container, Layout } from '../../../src/components';
import { getSingleVideo, getVideos } from '../../../src/api';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const videos = await getVideos();

  const paths = videos?.map((video) => {
    return {
      params: {
        id: video.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params as Params;
  const video = await getSingleVideo(id);

  return {
    props: {
      video,
    },
  };
};

interface SingleVideoProps {
  video: Media;
}

const VideoPage: NextPage<SingleVideoProps> = ({ video }) => {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-1 place-items-center'>
          <video width={800} height={800} controls>
            <source src={video.cloudinary_path} type='video/mp4' />
            <source src={video.aws_s3_path} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p className='text-left'>{video.caption}</p>
          <p className='text-left'>{video.location}</p>
        </div>
      </Container>
    </Layout>
  );
};

export default VideoPage;
