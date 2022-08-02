import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { getPhotos, getSinglePhoto } from '../../../src/api';
import { Container, Layout } from '../../../src/components';
import { Params } from '../../../src/interfaces';
import { Media } from '../../../src/types';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const photos = await getPhotos();

  const paths = photos?.map((photo) => {
    return {
      params: {
        id: photo.id.toString(),
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
  const photo = await getSinglePhoto(id);

  return {
    props: {
      photo,
    },
  };
};

interface SinglePhotoProps {
  photo: Media;
}

const PhotoPage: NextPage<SinglePhotoProps> = ({ photo }) => {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-1 place-items-center'>
          <Image src={photo.cloudinary_path} alt='' height={600} width={600} />
          <p>{photo.caption}</p>
        </div>
      </Container>
    </Layout>
  );
};

export default PhotoPage;
