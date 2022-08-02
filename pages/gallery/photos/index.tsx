import Image from 'next/image';
import { Media } from '../../../src/types';
import { getPhotos } from '../../../src/api';
import { useQuery } from '@tanstack/react-query';
import { Container, Layout } from '../../../src/components';
import Link from 'next/link';

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
              <Link href={`/gallery/photos/${photo.id.toString()}`}>
                <Image
                  src={photo.cloudinary_path}
                  alt=''
                  height={400}
                  width={400}
                />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
