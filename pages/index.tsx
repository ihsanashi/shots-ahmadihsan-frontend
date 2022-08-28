import Image from 'next/image';
import { Container, Layout } from '../src/components';

export default function Home() {

  return (
    <Layout>
      <Container>
        <div className='grid grid-cols-2 gap-1 md:grid-cols-3'>
          <h1>Hello world</h1>
        </div>
      </Container>
    </Layout>
  );
}
