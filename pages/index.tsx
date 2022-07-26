import Image from 'next/image';
import { supabase } from '../utils/supabaseClient';

export async function getStaticProps({}) {
  const { data, error } = await supabase
    .from('ig_photos')
    .select('*')
    .range(0, 10);

  return {
    props: {
      photos: data,
    },
  };
}

type Photo = {
  id: number;
  caption: string;
  location: string;
  aws_s3_path: string;
  cloudinary_path: string;
  taken_at: string;
  created_at: string;
};

export default function Home({ photos }: { photos: Photo[] }) {
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <Image
            src={photo.cloudinary_path}
            alt=''
            height={400}
            width={400}
          />
          <p>{photo.caption}</p>
        </div>
      ))}
    </div>
  );
}
