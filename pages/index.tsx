import { client, HOME_DATA } from '../lib/apollo';
import { Container, Layout, Photo, Video } from '../src/components';
import { Asset } from '../src/interfaces';

interface AssetProps {
  assets: Asset[];
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: HOME_DATA,
  });

  return {
    props: {
      assets: data.allAsset,
    },
  };
}

export default function Home({ assets }: AssetProps) {
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-1 md:grid-cols-3'>
          {assets.map((asset) => {
            if (asset.cloudinary_path.endsWith('.jpg')) {
              return (
                <Photo
                  key={asset._id}
                  src={asset.cloudinary_path}
                  caption={asset.caption}
                />
              );
            }

            return <Video key={asset._id} src={asset.cloudinary_path}></Video>;
          })}
        </div>
      </Container>
    </Layout>
  );
}
