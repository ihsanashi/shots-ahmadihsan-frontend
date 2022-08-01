import Image from 'next/image';
import { Container, Layout } from '../../src/components';
import { Media } from '../../src/types';
import { useQuery } from '@tanstack/react-query';
import { getPhotos } from '../../src/api';

export async function getStaticProps() {
  const photos = await getPhotos();

  return {
    props: {
      photos,
    },
  };
}

export default function PhotosPage({ photos }: { photos: Media[] }) {
  const { data } = useQuery(['photos'], getPhotos, {
    initialData: photos,
  });

  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          {photos.map((photo) => (
            <div key={photo.id}>
              <Image
                src={photo.cloudinary_path}
                alt=''
                height={400}
                width={400}
              />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
