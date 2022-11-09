import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { client, HOME_DATA } from '../lib/apollo';
import { Container, Layout } from '../src/components';
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
  console.log('assets: ', assets);
  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-1 md:grid-cols-3'>
          {JSON.stringify(assets)}
        </div>
      </Container>
    </Layout>
  );
}
