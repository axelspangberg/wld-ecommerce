import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { fetchEntries } from 'utils/contentfulPosts';
import Post from '@components/Post';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>WLD Ecommerce</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <Header title='WLD Ecommerce' />
        {/* <div className='posts'>
          {posts.map((p) => {
            return (
              <Post
                key={p.date}
                date={p.date}
                image={p.image.fields}
                title={p.title}
              />
            );
          })}
        </div> */}

        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
