import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost({ styles }) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <img src='/images/profile.jpg' alt='Your Name' />
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
