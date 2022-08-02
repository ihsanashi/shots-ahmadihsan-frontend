import Image from 'next/image';
import { Media } from '../../../src/types';
import { Params } from '../../../src/interfaces/index';
import { Container, Layout } from '../../../src/components';
import { getSingleStory, getStories } from '../../../src/api';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const stories = await getStories();

  const paths = stories?.map((story) => {
    return {
      params: {
        id: story.id.toString(),
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
  const story = await getSingleStory(id);

  return {
    props: {
      story,
    },
  };
};

interface SingleStoryProps {
  story: Media;
}

const StoryPage: NextPage<SingleStoryProps> = ({ story }) => {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-1 place-items-center'>
          {story.path.toLocaleLowerCase().includes('mp4') ? (
            <video height={600} width={600} controls>
              <source src={story.cloudinary_path} type='video/mp4' />
              <source src={story.aws_s3_path} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={story.cloudinary_path}
              alt=''
              height={600}
              width={600}
            />
          )}
          <p>{story.caption}</p>
        </div>
      </Container>
    </Layout>
  );
};

export default StoryPage;
